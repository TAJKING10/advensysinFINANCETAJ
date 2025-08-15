import React, { createContext, useContext, useState, useEffect } from 'react'

const LocationContext = createContext()

export const locations = {
  sweden: {
    code: 'sweden',
    name: 'Sweden',
    flag: '🇸🇪',
    currency: 'SEK',
    phone: '+46 72 529 81 26',
    email: 'contact@advensys-in-finance.com',
    address: 'Advensys In Finance Sweden Filial, c/o SERVANDO BOLAG AB, BOX 5814, 102 48 Stockholm, Sweden',
    mapsUrl: 'https://maps.google.com/maps?q=c/o+SERVANDO+BOLAG+AB,+BOX+5814,+102+48+Stockholm,+Sweden',
    timezone: 'CET',
    workingHours: '09:00 - 17:00'
  },
  france: {
    code: 'france',
    name: 'France',
    flag: '🇫🇷',
    currency: 'EUR',
    phone: '+33 6 98 21 44 46',
    email: 'contact@advensys-in-finance.com',
    address: 'Advensys Insurance Finance SARL (AIF), 66 Avenue des Champs Elysées, F-75008 Paris',
    mapsUrl: 'https://maps.google.com/maps?q=66+Avenue+des+Champs+Elysees,+F-75008+Paris,+France',
    timezone: 'CET',
    workingHours: '09:00 - 17:00'
  },
  luxembourg: {
    code: 'luxembourg',
    name: 'Luxembourg',
    flag: '🇱🇺',
    currency: 'EUR',
    phone: '+352 661 11 22 60',
    email: 'contact@advensys-in-finance.com',
    address: '34 Grand rue L-9710 Clervaux',
    mapsUrl: 'https://maps.google.com/maps?q=34+Grand+Rue,+L-9710+Clervaux,+Luxembourg',
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