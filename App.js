import { StatusBar } from 'react-native';
import { Navigation } from "./src/infrastructure/navigation";
import {AccountScreen} from "./src/features/account/screens/account.screen";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
        <AccountScreen/>
      {/*<Navigation />*/}
    </>
  );
}
