import mongoose from 'mongoose'
import React from 'react'

const mongodb = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGODB_URI)
            console.log('DB connected')
      }
   }
}

export default mongodb
