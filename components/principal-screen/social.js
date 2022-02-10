import { formLogic } from "./form-logic.js";

export function social(){
     const d = document,
          $social = d.createElement('section')

     $social.classList.add('social')

     $social.innerHTML = `
          <div class="title">Redes</div>
          
               <div class="social-links">     
                    <div class="social-direct">
                         <div id="icons">
                              <figure id="Linkedin">
                                   <a href="https://www.linkedin.com/in/daniel-tenorio-sotillet-79b484216/" target="_blank" rel="noopener">
                                        <img  src="../../assets/icons8-linkedin-100.png">
                                   </a>
                              </figure>

                              <figure id="Github">
                                   <a href="https://github.com/Wukongsito/landing-page" target="_blank" rel="noopener">
                                        <img  src="../../assets/icons8-github-100.png">
                                   </a>
                              </figure>

                              <figure id="Facebook">
                                   <a href="https://www.facebook.com/dterror0011/" target="_blank" rel="noopener">
                                        <img src="../../assets/icons8-facebook-90.png">
                                   </a>
                              </figure>

                              <figure id="Instagram">
                                   <a href="https://www.instagram.com/phantasma.cam/" target="_blank" rel="noopener">
                                   <img  src="../../assets/icons8-instagram-100.png">
                                   </a>
                              </figure>
                         </div>
                         <p id="social-name" class="hidden">-</p>
                    </div>

                    <div id="email">
                         <figure id="gmail">
                              <p>Déjame un mensaje</p>
                              <br>
                              <img src="../../assets/icons8-gmail-login-96.png">
                         </figure>
                         <form class="hidden">
                              <input type="text" name="name" placeholder="*Nombre" required autocomplete="off">
                              <input type="email" name="email" placeholder="*Email" required autocomplete="off">
                              <input type="text" name="subject" placeholder="Asunto" autocomplete="off">
                              <textarea name="msg-content" cols="60" rows="6" placeholder="*Deja tu mensaje aquí" required></textarea>
                              <input type="submit" value="Enviar mensaje" id="submit-btn">
                         </form>
                    </div>                  
               </div>
               <img src="../../assets/social-banner.jpg" class="social-banner-gif">    
     `;

     formLogic();

     return $social
}