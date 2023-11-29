const { kafka } = require('./client')

async function init(){
    const admin = kafka.admin()
    console.log('Admin Connecting');
    await admin.connect();
    console.log('Admin Connected successfully!');

    await admin.createTopics({
        topics: [
            {
                topic: 'hero-updates',
                numPartitions: 2
            }
        ]
    })

    console.log('Topic created Successfully!')
    console.log('Admin Disconnecting')
    await admin.disconnect()
}

init()