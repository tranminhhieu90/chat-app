Install package
npm install --save antd @ant-design/icons date-fns firebase lodash react-router-dom styled-components

2. Create firebase emulators 'https://firebase.google.com/docs/emulator-suite'

- Create new folder emulators and run command
  npm i -g firebase-tools
- login:
  firebase login
- Init:
  firebase init => yes => select features emulators and firestore => enter => existing project =>
  select project => select emulator want setting => Authen Emulator anf FireStore Emulator => Enter => yes => yes

  start firebase emulators (install java if any)
  firebase emulators:start
