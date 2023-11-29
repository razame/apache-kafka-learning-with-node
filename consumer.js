const { kafka } = require('./client')

async function init() {
    const consumer = kafka.consumer({groupId: 'user-1'});
    console.log('connecting consumer')
    await consumer.connect()
    console.log('connected consumer successfully')
    await consumer.subscribe({topics:['hero-updates'], fromBeginning: true})

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                topic: topic,
                partition: partition,
                value: message.value.toString(),
            })
        },
    })
}

init()