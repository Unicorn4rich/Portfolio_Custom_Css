import styles from "@/components/footer/footer.module.css"
import {caveatFont} from "@/font"

import React from 'react'

function Footer() {
  return (
    <>
    
    <footer className={styles.footer}>
        <p className={caveatFont.className}>© 2024 Shoaib Khan. All rights reserved.</p>
    </footer>

    </>
  )
}

export default Footer