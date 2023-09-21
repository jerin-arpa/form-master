import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

  // const handleSingUpSubmit = data => {
  //   console.log('Sign up data', data);
  // }

  // const handleUpdateProfile = data => {
  //   console.log('Update profile', data);
  // }

  return (
    <>
      <h1>Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm
        formTitle={'sign up'}
        handleSubmit={handleSingUpSubmit}>
        <div>
          <h2>Sing Up</h2>
          <p>Please sign up here</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={'Profile Update'}
        handleSubmit={handleUpdateProfile}
        submitButtonText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm> */}

      <Grandpa></Grandpa>
    </>
  )
}

export default App
