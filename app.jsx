import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { View, Text } from 'react-native'
import React from 'react'
import './global.css'

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  )
}

function AppContent() {
  return (
    <SafeAreaView>
      <View className=''>
        <Text>Welcome!</Text>
      </View>
    </SafeAreaView>
  )
}