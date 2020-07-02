import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/Course.scss';

import Module from './Module/Module'

const CourseModule = () => (
    <section className="course__module">
        <h2>Modulo del curso</h2>
        <div >
            <ul>
                <li>
                    <Module id={'1'} title={'Introducción a Marketing'} duration={"5:47"} text={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam... '}/>
                </li>

            </ul>
        </div>
        </section>
)
export default CourseModule;