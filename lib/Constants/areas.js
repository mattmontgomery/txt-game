export default [
    [{
        description: [
            `You are home. It's not so bad here, really.`,
            `There are trees to the east, west and south.`
        ]
    }, {
        description: 'You are in the woods.'
    }, {
        description: [
            'You are in the woods. There is a tall tree here, and its branches are strangely inviting.',
            'You think you stubbed your toe on a branch here earlier.'
        ],
        descriptions: {
            coin: 'There is a coin on the ground.'
        },
        items: 'coin'
    }],
    [{
        description: 'The woods end here. Huh.',
        descriptions: {
            dog: 'You hear a dog barking to the east.'
        }
    },{
        description: 'There is a very large puddle. You smell something funny.',
        descriptions: {
            dog: 'There is a very small dog splashing around in the puddle.'
        },
        items: 'dog'
    },{
        description: [
            `In the distance, over a river, you see a carnival. You don't think you can reach it.`
        ]
    }],
    [{
        description: [
            ``
        ]
    },{
        description: [
            `I'm not sure what's here. Nothing, probably.`
        ]
    },{
        description: [
            `In the distance, over a river, you see a carnival. You don't think you can reach it.`,
            `No, you can't reach it. Sorry.`
        ]
    }]
];
