const Timecontrol = async () => {
    const KarachiSunsetPromise = new Promise(resolve => {
      setTimeout(() => {
        alert('The time for Sunset in Karachi is 6:00 PM');
        resolve();
      }, 4000);
    });
  
    const LahoreSunsetPromise = new Promise(resolve => {
      setTimeout(() => {
        alert('The time for sunset in Lahore is 5:50 PM');
        resolve();
      }, 5000);
    });
  
    console.log('Karachi sunset time loading');
    await KarachiSunsetPromise;
    console.log('Karachi Sunset Time loaded');
  
    console.log('Lahore sunset time loading');
    await LahoreSunsetPromise;
    console.log('Lahore sunset time loaded');
  };
  
  Timecontrol();