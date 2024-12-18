import { Colors } from '@/constants/Colors'
import { Stack } from 'expo-router'
import { useRouter } from 'expo-router'

export default function PlaceLayout() {
  const router = useRouter()
  return (
    <>
      <Stack
        screenOptions={{
          title: 'Form Place',
          headerShown: true,
          // TODOD: verify why the back button is not working in real devices
          // headerLeft: ({ tintColor }) => <IconButton customStyle={{ marginRight: 8 }} iconName="arrow-back" size={26} color={tintColor} onPress={() => router.back()} />,
          // headerLeft: ({ tintColor }) => <Pressable onPress={() => console.log('back*-*-*')} style={{ backgroundColor: 'red', paddingVertical: 10, marginVertical: 10, marginHorizontal: 10, paddingHorizontal: 10 }}> <Text>Back</Text> </Pressable>,
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: Colors.gray700,
          contentStyle: { backgroundColor: Colors.primary700 }
        }}
      >
        <Stack.Screen name="PlaceDetails"
          options={{
            title: 'Place Details'
          }}
        />
      </Stack>
    </>
  )
}