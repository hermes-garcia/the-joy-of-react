import React from 'react';

import ScreenSaver from '../../../../components/ScreenSaver';

function ScreenSaverExercise({params}) {
  const colorSelected = params.colorId ?? 'white';
  return (
    <main className="screen-saver-wrapper">
      <ScreenSaver color={colorSelected} />
    </main>
  );
}

export default ScreenSaverExercise;
