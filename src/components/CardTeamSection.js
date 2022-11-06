import React from 'react'
import './style.css'
import CardTeamTemplate from './CardTeamTemplate'
import CardTeamTemplate2 from './CardTeamTemplate2'

function CardTeamSection() {
    return (
        <section id="team">
            <br></br>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h2>Our Co-ordinators</h2>
                        <p></p>
                    </div>
                </div>
                <div className="row col d-flex justify-content-center">
                    <div className="col-lg-3 col-md-6">
                        <CardTeamTemplate image='https://media-exp1.licdn.com/dms/image/C4D03AQFyxCnxZaqziA/profile-displayphoto-shrink_800_800/0/1516845659091?e=1672876800&v=beta&t=fIHw7bIZuPLrO3sYv-SLYk9hZi8j2i7of-L7Iw2cUgQ'
                            sname='Vikas Kolekar'
                            domain='Assistant Professor' />
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <CardTeamTemplate image='https://media-exp1.licdn.com/dms/image/C4D03AQH7jj3zgEuJlA/profile-displayphoto-shrink_400_400/0/1654761925755?e=1672876800&v=beta&t=sFNp973ZNJO_uA8skJ-dsvI-By9ZcVbFPs_nkKp30uA'
                            sname='Nitin Sakhare'
                            domain='Assistant Professor' />
                    </div>
                </div>

                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <br></br>
                        <h2>Our Team</h2>
                        <p></p>
                    </div>
                </div>
                <div className="row col d-flex justify-content-center">
                    <div className="col-lg-3 col-md-6">
                        <CardTeamTemplate image='https://media-exp1.licdn.com/dms/image/C4D03AQG1a-uEh9LjEg/profile-displayphoto-shrink_800_800/0/1661576509101?e=1672876800&v=beta&t=bDyqUY-TN6g_zQ6ZvCXEvGreZMNKRgdDNxC_PqdJq0E'
                            sname='Shreyas Gavhalkar'
                            domain='President' />
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <CardTeamTemplate image='https://media-exp1.licdn.com/dms/image/D5635AQGjjVIp3iqSVw/profile-framedphoto-shrink_800_800/0/1666830919297?e=1668232800&v=beta&t=QyHefp8Teq4LELWbD4R-wOlU0Hoeu-ulFCy1zFrhbHQ'
                            sname='Sachi Teke'
                            domain='Vice President' />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <CardTeamTemplate image='https://media-exp1.licdn.com/dms/image/D5635AQGoYKAqVaqoIw/profile-framedphoto-shrink_400_400/0/1646627344319?e=1668232800&v=beta&t=KHWtJa16qZsY17cnscmgI47-k17yAvkCSdAZKVMVxyA'
                            sname='Pratik Rathod'
                            domain='Publicity Head'
                            github='https://github.com/pratikrk'
                            linkedin='https://www.linkedin.com/in/pratik-rathod-10a522208/'
                            instagram='https://www.instagram.com/pratik_rathod_1' />
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <CardTeamTemplate image='https://media-exp1.licdn.com/dms/image/C4E03AQF2NbTe5H7pdg/profile-displayphoto-shrink_400_400/0/1629355938665?e=1672876800&v=beta&t=4MR7ykCuSpPAvXt1XzQaN5RgTvgdCsAnP9BQm8phfkI'
                            sname='Tejaswini Bahir'
                            domain='Industry Relation Head' />
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <CardTeamTemplate image='https://media-exp1.licdn.com/dms/image/D4D35AQHjsLhoWMTlUw/profile-framedphoto-shrink_400_400/0/1665682548821?e=1668265200&v=beta&t=08YpV8ME9M3lwP-y2jMlNbvDFemRtwxDBy8T9CQ6Ye8'
                            sname='Sayali Sonatakke'
                            domain='Design Head' />
                    </div>

                      <div className="col-lg-3 col-md-6">
                        <CardTeamTemplate2 image='https://media-exp1.licdn.com/dms/image/D4D35AQGGmjP_1MrxQQ/profile-framedphoto-shrink_400_400/0/1660154004765?e=1668261600&v=beta&t=9cdOcmjNXMx7-CBTT4OtF30-GIElbrh3C5MuKf5wOFc'
                            sname='Vishnu Jadhav'
                        domain='Departmant Head'
                        github='https://github.com/pratikrk'
                            linkedin='https://www.linkedin.com/in/pratik-rathod-10a522208/'
                            instagram='https://www.instagram.com/pratik_rathod_1'
                    
                    />
                    
                    </div>

                </div>

            </div>
        </section>
    )
}
export default CardTeamSection