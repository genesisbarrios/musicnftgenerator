import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Pay.module.css';
import { TextInput, NumberInput, Button, Input } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconAlertTriangle } from '@tabler/icons';
import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Burger,
} from '@mantine/core';

const Generator: NextPage = () => {

    const useStyles = createStyles((theme) => ({
        invalid: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.fn.rgba(theme.colors.red[8], 0.15) : theme.colors.red[0],
        },
      
        icon: {
          color: theme.colors.red[theme.colorScheme === 'dark' ? 7 : 6],
        },

        label:{
            color: "white"
        }
      }));
      
      const { classes } = useStyles();

      const form = useForm({
        initialValues: {
          email: '',
          walletAddress: '',
          crypto: '',
          amount: 0
        },
    
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
      });

      async function handleOnSubmit(e:any) {
        e.preventDefault();

        // form.validate();
        // form.isValid();

        const formData : any[] = [];
        Array.from(e.currentTarget.elements).forEach((field:any) => {
            if(!field.name){
                return;
            }else{
                formData[field.name] = field.value;
            }
        });
        
        formData.forEach((data) => {
            console.log(data)
        })
    }


  return (
    <div className={styles.container}>
      
        <main className={styles.main}>
            <h1>Music NFT Generator</h1>
            <form onSubmit={handleOnSubmit}>
                <TextInput
                        label="E-mail Address for Receipt"
                        error="Invalid email"
                        defaultValue="hello@gmail.com"
                        classNames={{ input: classes.invalid, label: classes.label }}
                        rightSection={<IconAlertTriangle stroke={1.5} size={16} className={classes.icon} />}
                        />
                <TextInput
                    label="Receipient Wallet Address"
                    error="Invalid wallet address"
                    defaultValue=""
                    classNames={{ input: classes.invalid, label: classes.label }}
                    rightSection={<IconAlertTriangle stroke={1.5} size={16} className={classes.icon} />}
                    />
                <TextInput
                    label="Crypto"
                    error=""
                    defaultValue="$SOL"
                    classNames={{ input: classes.invalid, label: classes.label }}
                    rightSection={<IconAlertTriangle stroke={1.5} size={16} className={classes.icon} />}
                    />
                <NumberInput
                    label="Amount in USD"
                    error=""
                    classNames={{ input: classes.invalid, label: classes.label }}
                    rightSection={<IconAlertTriangle stroke={1.5} size={16} className={classes.icon} />}
                    />
                <Input className={styles.send} type="submit"></Input>
            </form>
        </main>

     
    </div>
  )
}

export default Generator
