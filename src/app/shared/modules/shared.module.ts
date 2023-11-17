import { NgModule } from '@angular/core';

import { ButtonComponent } from '../../core/components/button/button.component';
import { LoginBlockComponent } from '../../auth/components/loginBlock/loginBlock.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [LoginBlockComponent],
  exports: [ButtonComponent, LoginBlockComponent],
})
export default class SharedModule {}
