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
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from 'react';

const Home: NextPage = () => {
    const {ref, inView} = useInView();
    const animation = useAnimation();
  
    useEffect(() => {
      console.log("use effect , inView = " , inView);
      if(inView){
        animation.start({
          x: 0,
          transition: {
            type: "spring",
            duration: 1,
            bounce: 0.3
          }
        })
      }else{
        animation.start({
          x:"102vw"
        })
      }
    }, [inView]);


  return (
    <div className="App">
  
      <div className={styles.titleDiv}>
         <motion.div
            initial="hidden" animate="visible" variants ={{
              hidden :{
                scale: 0.3,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.1
                }
              }
            }}>
            <Image src="/logo.png" height={160} width={480}></Image>
            <h2 className={styles.headings}>Randomly generate loops with your samples.</h2>
          </motion.div>
      </div>
      <section id="About" ref={ref}>
        <motion.div animate={animation}>
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
          </motion.div>
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
        <motion.div
            style={{
                display: "flex",
                placeItems: "center",
                placeContent: "center",
                marginLeft:"40%", 
                marginTop:"5%",
                borderRadius:"14px",
                width:"20%",
                height:"2em"
            }}
            animate={{ backgroundColor: ["#0af", "rgba(0,0,0,0)", "#fa0"] }}
            transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
            }}
        >
            <Link href='/#'>Start Generating Loops</Link>
        </motion.div>
  </div>
  )
}

export default Home
