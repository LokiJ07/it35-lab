import './ExploreContainer.css';
//Import For Ionic Action
import React from 'react';
import { IonActionSheet, IonButton, IonSearchbar } from '@ionic/react';
interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <>
      {/* Ionic Search */}
      <IonSearchbar></IonSearchbar>
      {/* Ionic Action */}
      <IonButton id="open-action-sheet">Open</IonButton>
      <IonActionSheet
        trigger="open-action-sheet"
        header="Actions"
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Share',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
      ></IonActionSheet>
    </>
  ); 
};
export default ExploreContainer;
