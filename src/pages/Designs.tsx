import React from 'react';
import {
  SafeAreaView,
  ScrollView
} from 'react-native';
import FlatCard from '../components/designs/FlatCard';
import ElevatedCards from '../components/designs/ElevatedCards';
import FancyCard from '../components/designs/FancyCard';
import ActionCard from '../components/designs/ActionCard';
import ContactList from '../components/designs/ContactList';

function DesignsPage(): React.JSX.Element {

  return (
    <ScrollView>
      <FlatCard />
      <ElevatedCards />
      <FancyCard />
      <ActionCard />
      <ContactList />
    </ScrollView>
  );
}

export default DesignsPage;