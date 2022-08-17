const prodConfig = {
  apiKey: 'AIzaSyCCS2IeWBiwX7NbvD8krUgh82e_JskkauQ',
  authDomain: 'internship-project-fecde.firebaseapp.com',
  databaseURL: 'https://internship-project-fecde-default-rtdb.firebaseio.com',
  projectId: 'internship-project-fecde',
  storageBucket: 'internship-project-fecde.appspot.com',
  messagingSenderId: '330014806944',
  appId: '1:330014806944:web:faaa9ff14c6b59f5e78ac5',
  measurementId: 'G-Z1HZ4FN23S'
};

const devConfig = {
  apiKey: 'AIzaSyCCS2IeWBiwX7NbvD8krUgh82e_JskkauQ',
  authDomain: 'internship-project-fecde.firebaseapp.com',
  databaseURL: 'https://internship-project-fecde-default-rtdb.firebaseio.com',
  projectId: 'internship-project-fecde',
  storageBucket: 'internship-project-fecde.appspot.com',
  messagingSenderId: '330014806944',
  appId: '1:330014806944:web:faaa9ff14c6b59f5e78ac5',
  measurementId: 'G-Z1HZ4FN23S'
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
