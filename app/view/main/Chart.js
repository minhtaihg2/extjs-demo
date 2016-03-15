Ext.define('MyApp.view.main.Chart', {
    extend: 'Ext.Panel',
    xtype: 'column-basic-3d',
    controller: 'chart',
    require: [
        'MyApp.store.Chart',
        'MyApp.view.main.List'
    ],

    layout: 'column',
    viewModel: true,
    defaults: {
    },
    items: [{
        xtype: 'mainlist',
        height: 500,
        columnWidth: 0.5
    }, {
        xtype: 'cartesian',
        reference: 'chart',
        columnWidth: 0.5,
        height: 500,
        insetPadding: 40,
        flipXY: true,
        interactions: {
            type: 'itemedit',
            style: {
                lineWidth: 2
            },
            tooltip: {
                renderer: 'onItemEditTooltipRender'
            }
        },
        animation: {
            easing: 'easeOut',
            duration: 500
        },
        store: {
            type: 'chart-store'
        },
        axes: [{
            type: 'numeric',
            position: 'bottom',
            fields: 'ind',
            grid: true,
            maximum: 4000000,
            majorTickSteps: 10,
            title: 'VND',
            renderer: 'onAxisLabelRender'
        }, {
            type: 'category',
            position: 'left',
            fields: 'country',
            grid: true
        }],
        series: [{
            type: 'bar',
            xField: 'country',
            yField: 'ind',
            style: {
                opacity: 0.80,
                minGapWidth: 10
            },
            highlightCfg: {
                strokeStyle: 'black',
                radius: 10
            },
            label: {
                field: 'ind',
                display: 'insideEnd',
                renderer: 'onSeriesLabelRender'
            },
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        }],
        sprites: [{
            type: 'text',
            text: 'Bảng thống kê lượng đặt bánh',
            fontSize: 22,
            width: 100,
            height: 30,
            x: 40, // the sprite x position
            y: 20  // the sprite y position
        }]
    }],

    tbar: [
        '->',
        {
            text: 'Preview',
            handler: 'onPreview'
        }
    ]
});