import React from 'react'
import { View } from 'react-native'
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { red, orange, blue, lightPurp, pink, white } from './colors'

export function getMetricMetaInfo(metric) {
   const info = {
      run: {
         displayName: 'Run',
         max: 50,
         unit: 'miles',
         step: 1,
         type: 'steppers',
         getIcon() {
            return (
               <View style={[styles.iconContainer, { backgroundColor: red }]}>
                  <MaterialIcons
                     name='directions-run'
                     color={white}
                     size={35}
                  />
               </View>
            )
         }
      },
   }

   return typeof metric === 'undefined'
      ? info
      : info[metric]
}