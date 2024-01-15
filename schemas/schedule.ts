export default {
    name: 'schedule',
    type: 'document',
    title: 'Schedule',
    fields: [{
        name: 'title',
        type: 'string',
        title: 'Title'
    },{
        name: 'date',
        type: 'datetime',
        title: 'Date',
        options: {
            dateFormat: 'DD-MM-YYYY',
            timeFormat: 'HH:mm',
            calendarTodayLabel: 'Today'
        }
    },{
        name: 'note',
        type: 'string',
        title: 'Note'
    }]
}