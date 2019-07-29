// /** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import {Navigation} from 'react-native-navigation';

import Login from './src/components/views/Login';
import Home from './src/components/views/Home'
import AddPost from './src/components/views/Admin/AddPost'


Navigation.registerComponent('sellitApp.Login', ()=>Login)
Navigation.registerComponent('sellitApp.Home', ()=>Home)
Navigation.registerComponent('sellitApp.AddPost', ()=>AddPost)


// Navigation.events().registerAppLaunchedListener(()=>{
//     Navigation.setRoot({
//         root: {
//             component: {
//                 name: "sellitApp.Login"
//             }
//         }
//     })
// })


Navigation.events().registerAppLaunchedListener(()=>{
    Navigation.setRoot({
        root: {
            stack: {
                id: 'AppStack',
                children: [
                    {
                        component:{
                            name: 'sellitApp.Login'
                        }
                    }
                ]
            }
        }
    })
})


