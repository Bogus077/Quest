import React, { useState } from 'react';
import styles from './Dialog.module.scss';
import { DialogText } from './DialogText';
import petrovRegular from './img/Petrov/regular.png';
import petrovHappy from './img/Petrov/happy.png';
import petrovAngry from './img/Petrov/angry.png';
import petrovSad from './img/Petrov/sad.png';
import petrovSurprise from './img/Petrov/surprise.png';
import { welcomeDialog } from './dialogs';

export const Dialog = () => {
  const dialogsArray = welcomeDialog;
  const [dialog, setDialog] = useState<typeof dialogsArray[0] | undefined>(
    dialogsArray[0]
  );

  const nextDialog = () => {
    const nextDialogIndex =
      dialogsArray.findIndex((item) => item.phrase === dialog?.phrase) + 1;
    const nextDialog = dialogsArray[nextDialogIndex];
    setDialog(undefined);

    setTimeout(() => setDialog(nextDialog), 100);
  };

  let personImgSrc = petrovRegular;
  switch (dialog?.emotion) {
    case 'happy':
      personImgSrc = petrovHappy;
      break;
    case 'regular':
    default:
      personImgSrc = petrovRegular;
  }

  return dialog ? (
    <div className={styles.dialog}>
      <div className={styles.cloud}>
        {dialog && <DialogText text={dialog.phrase} nextDialog={nextDialog} />}
      </div>
      <div className={styles.person}>
        <img className={styles.person__img} src={personImgSrc} alt="a friend" />
      </div>
    </div>
  ) : (
    <></>
  );
};
