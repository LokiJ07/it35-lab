import './ExploreContainer.css';
import React, { useState } from 'react';
import { IonActionSheet, IonButton, IonSearchbar } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);

  const openActionSheet = () => {
    setShowActionSheet(true);
  };

  const handleAction = (action: string) => {
    console.log(`Action selected: ${action}`);
    setShowActionSheet(false); // Close the action sheet after selection
  };

  return (
    <>
      {/* Ionic Search */}
      <IonSearchbar placeholder="Search..."></IonSearchbar>
      {/* Ionic Action */}
      <IonButton onClick={openActionSheet}>Open Action Sheet</IonButton>
      <IonActionSheet
        isOpen={showActionSheet}
        header="Actions"
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            handler: () => handleAction('delete'),
          },
          {
            text: 'Share',
            handler: () => handleAction('share'),
          },
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => handleAction('cancel'),
          },
        ]}
        onDidDismiss={() => setShowActionSheet(false)} // Close the action sheet when dismissed
      />
    </>
  ); 
};

export default ExploreContainer;