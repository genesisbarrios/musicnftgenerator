import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/create.module.css';
import { TextInput, NumberInput, Button, Input } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconAlertTriangle } from '@tabler/icons';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons';
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css'
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

  // const getUploadParams = (meta:any) => { return { url: '/api/create' } }
  
  // // called every time a file's `status` changes
  // const handleChangeStatus = ( {meta, file}, status:any) => { console.log(status, meta, file) }
  
  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files:any, allFiles:any) => {
    
    console.log(files.map((f:any) => f.meta));

    allFiles.forEach((f:any) => f.remove());

  }

  return (
    <div className={styles.container}>
      
        <main className={styles.main}>
            <h1>Music NFT Generator</h1>
            <p>Upload Files</p>
            <div className={styles.dropzone}>
              {/* <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                accept="image/*,audio/*,video/*, vnd/*, gif/*"
                multiple={true}
              /> */}
            </div>
            <div className={styles.instructionsGroup}>
              <p className={styles.instructions}>Please upload stems in folders grouped and named by category/instrument.</p>
              <p className={styles.instructions}>We only accept stems in the same key and same tempo, for right now.</p>
              <p className={styles.instructions}>Upload an image file to be associated to your loops...</p>
            </div>
        </main>

     
    </div>
  )
}

export default Generator
