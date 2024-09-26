import React from 'react';
import { View } from 'react-native';
import { ThemedText } from '@/components/ThemedText'; // Adjust the import path as needed
import { ExternalLink } from '@/components/ExternalLink'; // Adjust npm the import path as needed
import { Collapsible } from '@/components/Collapsible'; // Adjust the import path as needed
import LoginButton from '../Spotify/LoginButton'; // Adjust the import path as needed

const Explore: React.FC = () => {
  return (
    <View>
      <Collapsible title="Navigation">
        <ThemedText>
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <ThemedText>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Images">
        {/* Add the LoginButton here */}
        <LoginButton />
      </Collapsible>
    </View>
  );
};

export default Explore;