import './Footer.scss'

function Footer () {
  return (
  <footer className="main-footer">
    <div className='main-footer__separator'></div>
    <div className='main-footer__container'>
      <div className='main-footer__content'>
        <div className='main-footer__row'>
          <div className='main-footer__col'>
            <img className='main-footer__basics__logo'/>
          </div>
        </div>
        <div className='main-footer__row'>
          <div className='main-footer__col'>
            <label for="sign-up-to-newsletter">
              <span className='main-footer__h3'>Sign up to our newsletter</span>
              <span>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</span>
            </label>
            <div>
              <form className='main-footer__newsletter__form'>
                <input type='hidden' name='other'></input>
                <input type='hidden' name='mailing_list' id='id_newsletter-mailing_list'></input>
                <input type='hidden' name='source' id='id_newsletter-source'></input>
                <input type='hidden' name='next' id='id_newsletter-next'></input>
                <div className='main-footer__form__group'>
                  <div className='main-footer__form__field'>
                    <input id='sign-up-to-newsletter' name='email' type='email' placeholder='Email Adress'></input>
                  </div>
                  <input className='main-footer__button' type='submit'></input>
                </div>
              </form>
            </div>
          </div>
          <div className='main-footer__col'>
            <ul className='main-footer__list'>
              <li>
                <a className='main-footer__has-arrow'>Register Live or Push</a>
              </li>
              <li>
                <a className='main-footer__has-arrow'>About Ableton</a>
              </li>
              <li>
                <a className='main-footer__has-arrow'>Jobs</a>
              </li>
            </ul>
            <ul className='main-footer__social'>
              <li className='main-footer__social-listitem'>
                <a className='main-footer__social-button'>
                  <span className='abl-visually-hidden'>Abelton Facebook</span>
                </a>
              </li>
              <li className='main-footer__social-listitem'>
                <a className='main-footer__social-button'>
                  <span className='abl-visually-hidden'>Abelton Twitter</span>
                </a>
              </li>
              <li className='main-footer__social-listitem'>
                <a className='main-footer__social-button'>
                  <span className='abl-visually-hidden'>Abelton Youtube</span>
                </a>
              </li>
              <li className='main-footer__social-listitem'>
                <a className='main-footer__social-button'>
                  <span className='abl-visually-hidden'>Abelton Instagram</span>
                </a>
              </li>
            </ul>
          </div>
          <div className='main-footer__col'>
            <h3 className='main-footer__h3'>Education</h3>
            <ul className='main-footer__list'>
              <li>
                <a className='main-footer__has-arrow'>
                  Offers for students and teachers
                </a>
              </li>
              <li>
                <a className='main-footer__has-arrow'>
                  Ableton for the Classroom
                </a>
              </li>
              <li>
                <a className='main-footer__has-arrow'>
                  Ableton for Colleges and Universities
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='main-footer__row'>
          <div className='main-footer__col'>
            <h3 className='main-footer__h3'>Community</h3>
            <ul className='main-footer__list'>
              <li>
                <a className='main-footer__has-arrow'>Find Ableton User Groups</a>
              </li>
              <li>
                <a className='main-footer__has-arrow'>Find Certified Training</a>
              </li>
              <li>
                <a className='main-footer__has-arrow'>Become a Certified Trainer</a>
              </li>
            </ul>
          </div>
          <div className='main-footer__col'>
            <h3 className='main-footer__h3'>Language and Location</h3>
            <div className='main-footer__language-selector'>
              <div className='main-footer__secondary__select'>
                <div className='form__element_field'>
                  <form>
                    <input></input>
                    <label></label>
                    <select>
                      <option selected>English</option>
                      <option>Español</option>
                    </select>
                    <input type='hidden'></input>
                  </form>
                </div>
              </div>
              <div className='main-footer__secondary__select'>
                <div className='form__element__field'>
                  <form>
                    <label>Country or Region</label>
                    <input type='hidden'></input>
                    <input type='hidden'></input>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='main-footer__row'>
          <div className='main-footer__col'>
            <div className='main-footer__secondary__link-list'>
              <a className='main-footer__secondary__link-list__item'>Contact Us</a>
              <a className='main-footer__secondary__link-list__item'>Press Resources</a>
              <a className='main-footer__secondary__link-list__item'>Legal Info</a>
              <a className='main-footer__secondary__link-list__item'>Privacy Policy</a>
              <a className='main-footer__secondary__link-list__item'>Cookie Settings</a>
              <a className='main-footer__secondary__link-list__item'>Imprint</a>
            </div>
            <div className='main-footer__secondary__signature'>
              <img className='main-footer__secondary__signature__logo'/>
              <span className='main-footer__secondary__signature__label'>Made in Berlin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export { Footer };