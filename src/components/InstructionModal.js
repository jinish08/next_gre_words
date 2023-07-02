import React from 'react'
import styles from '@/styles/InstructionModal.module.css'

const InstructionModal = ({isOpen, closeModal,toggleModal}) => {
  return (
    <div>
      <div className={`${styles.modal} ${isOpen ? styles.open : ''}`} onClick={closeModal} name="close">
        <div className={styles['modal-content']}>
          <div className={styles['close-button']} onClick={toggleModal}>
            <i className={`fas fa-times ${styles.icon}`}></i>
          </div>
          <h2>Instructions</h2>
          <div className={styles.instructions}>
            <div className={styles.instruction}>
              <i className={`fas fa-arrow-left ${styles.icon}`}></i>
              <span>Click the left arrow key to go to the previous card</span>
            </div>
            <div className={styles.instruction}>
              <i className={`fas fa-arrow-right ${styles.icon}`}></i>
              <span>Click the right arrow key to go to the next card</span>
            </div>
            <div className={styles.instruction}>
              <i className={`fas fa-space-bar ${styles.icon}`}></i>
              <span>Press the space bar or click on the card to view its meaning, synonyms, and sentences</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructionModal