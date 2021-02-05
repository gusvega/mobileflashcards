import { Notifications, Permissions } from 'expo-permissions'
import { AsyncStorage } from 'react-native'



const NOTIFICATION_KEY = 'MobileFlashCards:notifications'


export function setLocalNotification() {
   AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then((data) => {
         if (data === null) {
            Permissions.askAsync(Permissions.NOTIFICATIONS)
               .then(({ status }) => {
                  if (status === 'granted') {
                     Notifications.cancelAllScheduledNotificationsAsync()

                     let tomorrow = new Date()
                     tomorrow.setDate(tomorrow.getDate() + 1)
                     tomorrow.setHours(20)
                     tomorrow.setMintutes(0)

                     Notifications.scheduleLocalNotificationsAsync(
                        createNotification(),
                        {
                           time: tomorrow,
                           repeat: 'day',
                        }
                     )

                     AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                  }
               })
         }
      })
}

export function clearLocalNotification() {
   return AsyncStorage.removeItem(NOTIFICATION_KEY)
     .then(Notifications.cancelAllScheduledNotificationsAsync)
 }