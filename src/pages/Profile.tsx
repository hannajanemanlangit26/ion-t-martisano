import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonButtons, IonBackButton } from '@ionic/react';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <img alt="Silhouette of mountains" src="../src/assets/we bear.png" />
          <IonCardHeader>
            <IonCardTitle>hanny</IonCardTitle>
            <IonCardSubtitle>student</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Don't be trapped in someone else's dream</IonCardContent>
          <IonButton id="present-alert" expand="full">Click Me</IonButton>
        </IonCard>
        {/* Rest of the code */}
      </IonContent>
    </IonPage>
  );
};

export default Profile;