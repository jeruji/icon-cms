export default {
    name: 'speaker',
    type: 'document',
    title: 'Speaker',
    fields: [{
        name: 'name',
        type: 'string',
        title: 'Name'
    },{
        name: 'title',
        type: 'string',
        title: 'Title'
    },{
        name: 'picture',
        title: 'Picture',
        type: 'image',
        options: {
            hotspot: true,
        },
        fields: [
            {
                type: 'string',
                name: 'alt',
                title: 'Alt Text'
            }
        ]
    },{
        name: 'speakerType',
        type: 'reference',
        title: 'Type',
        to: [{ type: 'speakerType' }],
        validation: (Rule: any) => {
            return Rule.required();
        }
    },
    {
        name: 'schedule',
        type: 'reference',
        title: 'Schedule',
        to: [{type: 'schedule'}],
        validation: (Rule:any) => { return Rule.required() }
    },
    {
        name: 'description',
        type: 'text',
        title: 'Description'
    },{
        name: 'companyLogo',
        title: 'Company Logo',
        type: 'image',
        options: {
            hotspot: true,
        },
        fields: [
            {
                type: 'string',
                name: 'alt',
                title: 'Alt Text'
            }
        ]
    }]
}