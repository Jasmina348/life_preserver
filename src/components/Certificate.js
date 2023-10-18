import React from 'react';
import './certificate.css'

export default function Certificate() {
  return (
    <div class="container pm-certificate-container">
    <div class="outer-border"></div>
    <div class="inner-border"></div>
    
    <div class="pm-certificate-border col-xs-12">
      <div class="row pm-certificate-header">
        <div class="pm-certificate-title cursive col-xs-12 text-center">
          <h2 style={{fontSize:25}}>Certificate of Completion</h2>
        </div>
      </div>

      <div class="row pm-certificate-body">
        
        <div class="pm-certificate-block">
            <div class="col-xs-12">
              <div class="row">
                <div class="col-xs-2"></div>
                <div class="pm-certificate-name underline margin-0 col-xs-8 text-center">
                  <span class="pm-name-text bold">Tanka Prasad Tiwari</span>
                </div>
                <div class="col-xs-2"></div>
              </div>
            </div>          

            <div class="col-xs-12">
              <div class="row">
                <div class="col-xs-2"></div>
                <div class="pm-earned col-xs-8 text-center">
                  <span class="pm-earned-text padding-0 block cursive" style={{fontSize:20}}>has earned</span>
                  <span class="pm-credits-text block bold sans">CPL5559: 10.0 Credit Hours</span>
                </div>
                <div class="col-xs-2"></div>
                <div class="col-xs-12"></div>
              </div>
            </div>
            
            <div class="col-xs-12">
              <div class="row">
                <div class="col-xs-2"></div>
                <div class="pm-course-title col-xs-8 text-center">
                  <span class="pm-earned-text block cursive" style={{fontSize:20}}>For Completing</span>
                </div>
                <div class="col-xs-2"></div>
              </div>
            </div>

            <div class="col-xs-12">
              <div class="row">
                <div class="col-xs-2"></div>
                <div class="pm-course-title underline col-xs-8 text-center">
                  <span class="pm-credits-text block bold sans">Doing Project with Jasmina Bahadur</span>
                </div>
                <div class="col-xs-2"></div>
              </div>
            </div>
        </div>       


      </div>

    </div>
  </div>
  )
}
