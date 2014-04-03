dataLoader.dataDefine('Indexes', {
    children: [
        {
            text: 'Item 1',
            expanded: true,
            children: [
                {
                    text: 'Item 1.1',
                    leaf: true,
                    itemIndex: 'item1.1'
                },
                {
                    text: 'Item 1.2',
                    leaf: true,
                    itemIndex: 'item1.2'
                },
                {
                    text: 'Item 1.3',
                    expanded: true,
                    children: [
                        {
                            text: 'Item 1.3.1',
                            leaf: true,
                            itemIndex: 'item1.3.1'
                        },
                        {
                            text: 'Item 1.3.2',
                            leaf: true,
                            itemIndex: 'item1.3.2'
                        }
                    ]
                }
            ]
        },
        {
            text: 'Item 2',
            expanded: true,
            children: [
                {
                    text: 'Item 2.1',
                    expanded: true,
                    children: [
                        {
                            text: 'Item 2.1.1',
                            leaf: true
                        },
                        {
                            text: 'Item 2.1.2',
                            leaf: true
                        }
                    ]
                },
                {
                    text: 'Item 2.2',
                    expanded: true,
                    children: [
                        {
                            text: 'Item 2.2.1',
                            leaf: true
                        },
                        {
                            text: 'Item 2.2.2',
                            leaf: true
                        },
                        {
                            text: 'Item 2.2.3',
                            leaf: true
                        },
                        {
                            text: 'Item 2.2.4',
                            leaf: true
                        },
                        {
                            text: 'Item 2.2.5',
                            leaf: true
                        }
                    ]
                },
                {
                    text: 'Item 2.3',
                    expanded: true,
                    children: [
                        {
                            text: 'Item 2.3.1',
                            expanded: true,
                            children: [
                                {
                                    text: 'Item 2.3.1.1',
                                    leaf: true
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        { text: 'Item 3', "leaf": true }
    ]
});