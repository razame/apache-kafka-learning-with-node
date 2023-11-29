const { kafka } = require('./client')

async function init () {
    const producer = kafka.producer()
    console.log('Connecting Producer')
    await producer.connect()
    console.log('Connected Producer Successfully')

    await producer.send({
        topic: 'hero-updates',
        messages: [
            {
                partition: 0,
                key: 'location-update',
                value: JSON.stringify({
                    superhero: 'Superman', location: 'New York'
                })
            }
        ]
    })

    await producer.disconnect()
}

init();