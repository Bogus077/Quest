import React, { useCallback, useEffect, useState } from 'react';
import styles from './DialogText.module.scss';

type Props = {
  text: string;
  nextDialog: () => void;
};

export const DialogText = ({ text, nextDialog }: Props) => {
  const [output, setOutput] = useState(text.slice(0, 1));
  const [full, setFull] = useState(false);
  const duration = 50;

  const onClick = () => {
    if (output !== text) {
      setOutput(text);
      setFull(true);
    } else {
      nextDialog();
    }
  };

  const createOutput = useCallback(() => {
    setTimeout(
      () => setOutput(text.slice(0, full ? text.length : output.length + 1)),
      duration
    );
  }, [full, output.length, text]);

  useEffect(() => createOutput(), [createOutput]);

  return (
    <div onClick={onClick} className={styles.dialog}>
      {output}
    </div>
  );
};
