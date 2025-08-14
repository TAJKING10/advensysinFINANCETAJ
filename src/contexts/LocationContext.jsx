import React, { createContext, useContext, useState, useEffect } from 'react'

const LocationContext = createContext()

export const locations = {
  sweden: {
    code: 'sweden',
    name: 'Sweden',
    flag: '🇸🇪',
    currency: 'SEK',
    phone: '+46 8 123 456 78',
    email: 'sweden@advensys-insurance.com',
    address: 'Storgatan 123, 111 22 Stockholm, Sweden',
    timezone: 'CET',
    workingHours: '09:00 - 17:00'
  },
  france: {
    code: 'france',
    name: 'France',
    flag: '🇫🇷',
    currency: 'EUR',
    phone: '+33 1 23 45 67 89',
    email: 'france@advensys-insurance.com',
    address: '123 Rue de la Paix, 75001 Paris, France',
    timezone: 'CET',
    workingHours: '09:00 - 17:00'
  },
  luxembourg: {
    code: 'luxembourg',
    name: 'Luxembourg',
    flag: '🇱🇺',
    currency: 'EUR',
    phone: '+352 26 12 34 56',
    email: 'luxembourg@advensys-insurance.com',
    address: '12 Avenue de la Liberté, L-1930 Luxembourg City, Luxembourg',
    timezone: 'CET',
    workingHours: '09:00 - 17:00'
  }
}

export const useLocation = () => {
  const context = useContext(LocationContext)
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider')
  }
  return context
}

export const LocationProvider = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState('sweden')

  // Load saved location preference from localStorage
  useEffect(() => {
    const savedLocation = localStorage.getItem('preferred-location')
    if (savedLocation && locations[savedLocation]) {
      setCurrentLocation(savedLocation)
    }
  }, [])

  const changeLocation = (locationCode) => {
    if (locations[locationCode]) {
      setCurrentLocation(locationCode)
      localStorage.setItem('preferred-location', locationCode)
    }
  }

  const value = {
    currentLocation,
    locations,
    changeLocation,
    currentLocationData: locations[currentLocation]
  }

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  )
}