import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
  Navbar,
  NavLink,
  Grid
} from '@mantine/core';
const Home: NextPage = () => {
  return (
    <div className="App">
  
      <div className={styles.titleDiv}>
          <Image src="/logo.png" height={160} width={480}></Image>
          <h2 className={styles.headings}>Randomly generate loops with your samples.</h2>
      </div>
      <section id="About">
          <div className={styles.container}>
              <Grid>
                  <Grid.Col span={6}>
                     <img className={styles.roundedCircle} src="nftt.png" />
                  </Grid.Col>
                  <Grid.Col span={6}>
                  <div className={styles.textSection}>
                    <h2 className={styles.headingsAbout}>For those that are early in the space...</h2>
                    <p className={styles.paragraphs}>Music NFTs have proven to be a necessary resource and useful space for artists. We have yet to see the space blow up- platforms come and go but we are launching with a new tool that is here to stay.</p>
                  </div>
                  </Grid.Col>
              </Grid>
          </div>
      </section>
      <section>
          <div className={styles.container}>
              <Grid>
              
                <Grid.Col span={6}>
                <div className={styles.textSection}>
                    <h2 className={styles.headingsAbout}>Welcome to a new Meta!</h2>
                    <p className={styles.paragraphs}>We want to aid you in creating a new meta to help the Music NFT space take off. With Tiktok sounds and snippets going viral there's a market for these sounds and we want to help create them!</p>
                </div>
                </Grid.Col>
                <Grid.Col span={6}>
                    <img className={styles.roundedCircle} src="nft.png" />
                </Grid.Col>
              </Grid>
          </div>
      </section>
      <section>
          <div className={styles.container}>
              <Grid>
                  <Grid.Col span={6}>
                      <img className={styles.roundedCircle} src="studio.png" />
                  </Grid.Col>
                  <Grid.Col span={6} >
                    <div className={styles.textSection}>
                          <h2 className={styles.headingsAbout}>Let's Start Creating!</h2>
                          <p  className={styles.paragraphs}>With our first tool you can randomly generate loops with your samples. We will provide you with your loops and the metadata that you can upload to be minted. Future plans include a platform where you can mint directly after creating your loops.</p>
                    </div>
                  </Grid.Col>
              </Grid>
          </div>
      </section> 
      <Link href='/#'><Button style={{backgroundColor:"#3B188A", marginLeft:"45%", marginTop:"5%"}}>Start Generating Loops</Button></Link>
  
  </div>
  )
}

export default Home
