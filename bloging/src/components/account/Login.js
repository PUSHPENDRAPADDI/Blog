import { Box, Button, TextField, Typography, styled } from '@mui/material';
import { useState } from 'react';

const Component = styled(Box)`
    width:400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`

const Image = styled('img')({
    width: 100,
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0'
})
const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex-direction: column;
    & > div, & > button, & > p{
        margin-top: 20px;
    }
`
const LoginButton = styled(Button)`
    text-transform:none;
    background:#fB6418;
    color:#ffffff;
    height:48px;
    border-radius:2px;
`
const SignUpButton = styled(Button)`
    text-transform:none;
    background:#fff;
    color:#2874f0;
    height:48px;
    border-radius:2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`

const Text = styled(Typography)`
    color: #878787;
    font-size:16px;
`

const signUpInitialValue = {
    name: '',
    username: '',
    password: ''
}
const Login = () => {
    const imgageUrl = "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png"
    const [account, toggleAccount] = useState("login");
    const [signup, setSignup] = useState(signUpInitialValue);

    const handleChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value })
    }

    const signupUser = () => {
          
    }

    return (
        <Component>
            <Box>
                <Image src={imgageUrl} alt="banner img" />
                {account === 'login' ?
                    <Wrapper>
                        <TextField variant="standard" label="Enter UserName" />
                        <TextField variant="standard" label="Enter Password" />
                        <LoginButton variant='contained'>Login</LoginButton>
                        <Text>OR</Text>
                        <SignUpButton onClick={() => toggleAccount("create")} >Create an account</SignUpButton>
                    </Wrapper> : <Wrapper>
                        <TextField variant="standard" label="Enter Name" name="name" onChange={() => handleChange()} />
                        <TextField variant="standard" label="Enter Username" name="username" onChange={() => handleChange()} />
                        <TextField variant="standard" label="Enter Password" name="password" onChange={() => handleChange()} />
                        <SignUpButton onClick={() => signupUser} >Signup</SignUpButton>
                        <Text>OR</Text>
                        <LoginButton variant='contained' onClick={() => toggleAccount("login")}>Already Have an account</LoginButton>
                    </Wrapper>}
            </Box>
        </Component>
    )
}

export default Login;