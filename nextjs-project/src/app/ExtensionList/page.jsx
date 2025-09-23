import React from 'react'
import ExtensionsList from './ExtensionsList'

function ExtensionPage() {

    const extensionCards = [
        {
            image: '/logo-devlens.svg',
            title: 'DevLens',
            intro: 'Quickly inspect page layouts and visualize element boundaries.'
        },
        {
            image: '/logo-style-spy.svg',
            title: 'StyleSpy',
            intro: 'Quickly inspect page layouts and visualize element boundaries.'
        },
        {
            image: '/logo-speed-boost.svg',
            title: 'SpeedBoost',
            intro: 'Quickly inspect page layouts and visualize element boundaries.'
        },
        {
            image: '/logo-json-wizard.svg',
            title: 'JSONWizard',
            intro: 'Quickly inspect page layouts and visualize element boundaries.'
        },
        {
            image: '/logo-tab-master-pro.svg',
            title: 'TabMaster Pro',
            intro: 'Quickly inspect page layouts and visualize element boundaries.'
        },
        {
            image: '/logo-viewport-buddy.svg',
            title: 'ViewportBuddy',
            intro: 'Quickly inspect page layouts and visualize element boundaries.'
        },
        {
            image: '/logo-markup-notes.svg',
            title: 'Markup Notes',
            intro: 'Quickly inspect page layouts and visualize element boundaries.'
        },
        {
            image: '/logo-grid-guides.svg',
            title: 'GridGuides',
            intro: 'Quickly inspect page layouts and visualize element boundaries.'
        },
        {
            image: '/logo-palette-picker.svg',
            title: 'Palette Picker',
            intro: 'Quickly inspect page layouts and visualize element boundaries.'
        },
        {
            image: '/logo-link-checker.svg',
            title: 'LinkChecker',
            intro: 'Quickly inspect page layouts and visualize element boundaries.'
        },
        {
            image: '/logo-dom-snapshot.svg',
            title: 'Dom Snapshot',
            intro: 'Quickly inspect page layouts and visualize element boundaries.'
        },
        {
            image: '/logo-console-plus.svg',
            title: 'ConsolePlus',
            intro: 'Quickly inspect page layouts and visualize element boundaries.'
        }
    ]
    return (
        <div className='ExtensionCards'>
            <div className='topBtns'>
                <h1>Extensions List</h1>
                <div className='Btns'>
                    <button className='btn1'>All</button>
                    <button>Active</button>
                    <button>Inactive</button>
                </div>
            </div>
            <div className='grid grid-cols-3'>
                {
                    extensionCards.map((card, index) => (
                        <ExtensionsList
                            key={index}
                            image={card.image}
                            title={card.title}
                            intro={card.intro}
                        />
                    ))
                }
            </div>

            {/* <div className='ExtenList'>
                <div className='List1'>
                    <ExtensionsList
                        image='/logo-devlens.svg'
                        title='DevLens'
                        intro='Quickly inspect page layouts and visualize element boundaries.' />
                    
                    <ExtensionsList
                        image='/logo-json-wizard.svg'
                        title='JSONWizard'
                        intro='Formats, Validates, and prttifies JSON responses in-browser.' />
                    
                    <ExtensionsList
                        image='/logo-markup-notes.svg'
                        title='Markup Notes'
                        intro='Enables annotation and notes directly onto webpages for collaborative debugging.' />
                    
                    <ExtensionsList
                        image='/logo-link-checker.svg'
                        title='LinkChecker'
                        intro='Scans snf highlights broken links on sny page.' />
                </div>

                <div className='List2'>
                    <ExtensionsList
                        image='/logo-style-spy.svg'
                        title='StyleSpy'
                        intro='Instantly analyze and copy CSS from any webpage element.' />
                    
                    <ExtensionsList
                        image='/logo-tab-master-pro.svg'
                        title='TabMaster Pro'
                        intro='Organizes browser tabs into groups and sessions.' />
                    
                    <ExtensionsList
                        image='/logo-grid-guides.svg'
                        title='GridGuides'
                        intro='Overlay customizable grids and alignment guides on any webpage.' />
                    
                    <ExtensionsList
                        image='/logo-dom-snapshot.svg'
                        title='DOM Snapshot'
                        intro='Capture and export DOM structures quickly.' />
                </div>

                <div className='List3'>
                    <ExtensionsList
                        image='/logo-speed-boost.svg'
                        title='SpeedBoost'
                        intro='Optimizes browser resource usage to acclerate page loading.' />
                    
                    <ExtensionsList
                        image='/logo-viewport-buddy.svg'
                        title='ViewportBuddy'
                        intro='Simulates various screen resolutions directly within the browser.' />
                    
                    <ExtensionsList
                        image='/logo-palette-picker.svg'
                        title='Palette Picker'
                        intro='Instantly extracts color palettes from any webpage.' />
                    
                    <ExtensionsList
                        image='/logo-console-plus.svg'
                        title='ConsolePlus'
                        intro='Enhanced developer console with advanced filtering and logging.' />
                </div>
            </div> */}
        </div>
  )
}

export default ExtensionPage
