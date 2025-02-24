import { 
  IonAvatar,
  IonButton,
    IonButtons,
      IonContent, 
      IonHeader, 
      IonImg, 
      IonItem, 
      IonLabel, 
      IonList, 
      IonMenuButton, 
      IonModal, 
      IonPage, 
      IonSearchbar, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
  const Search: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Search</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen color="light">
            <IonSearchbar placeholder="Search"></IonSearchbar>
            <IonList>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>
                <IonLabel>
                  <h2>Connor Smith</h2>
                  <p>Sales Rep</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>
                <IonLabel>
                  <h2>Daniel Smith</h2>
                  <p>Product Designer</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>
                <IonLabel>
                  <h2>Greg Smith</h2>
                  <p>Director of Operations</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>
                <IonLabel>
                  <h2>Zoey Smith</h2>
                  <p>CEO</p>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
      </IonPage>
    );
  };
  export default Search;