import { Component } from '@angular/core';
import { LoginPage } from '../login/login';
import { NavController, NavParams, AlertController, Events } from 'ionic-angular';
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserProvider } from '../../../providers/user/user';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import * as shajs from 'sha.js';
import { File } from '@ionic-native/file';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  private email;
  private password;
  public datosUser;
  public fotoId = localStorage.getItem('image');
  private url = "http://dappapache02.eastus.cloudapp.azure.com:4200" ;
  public foto;
  public image;

  public formCode: FormGroup;

  public password_type: string = 'text';
  public passwordold_type: string = 'text';

  public datosPaciente;
  public correoElectronico;
  public nacimiento;

  timemark = new Date().getTime();


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public form: FormBuilder,
              public alertCtrl: AlertController,
              public userPvr: UserProvider,
              public camera: Camera,
              public transfer: FileTransfer,
              public events: Events) {
                this.formCode = this.form.group({
                  oldPassword  : ['' , [Validators.required]
                                 ],
                  passwordnew   :['', [Validators.required,
                                        Validators.minLength(8),
                                        Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}')]
                                  ],
                  passwordRepeat :['', [Validators.required,
                                        Validators.minLength(8),
                                        Validators.pattern("(?=.*[A-Za-z])(?=.*[\\d@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}")]
                                  ]
                                });
                                console.log('el valor del formulario:', this.formCode);

              // carga de la foto de perfil
              this.foto = this.url + `${this.fotoId}`;
              // console.log(this.foto);
              // carga de los datos del usuario, aqui se le manda el id del usuario para obtener los datos con usrPvr-> getDatosPaciente
              const id = localStorage.getItem('idTokenUser');
              this.userPvr.getDatosPaciente(id).subscribe(data =>{
                this.datosPaciente = data;
                console.log('this.datosPaciente:', this.datosPaciente);
              });
            this.correoElectronico = localStorage.getItem('emailUser');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  validacion(){
    const valid = this.formCode.value;
    if(valid.passwordnew == valid.passwordRepeat){
      return true;
    }else{
      return false;
    }
  }

  takePicture(){
    let alert = this.alertCtrl.create({
      title:'Tu foto de Perfil',
      message:'puedes cambiar la imagen para tu perfil',
      buttons: [
        {
          text:'tomar foto',
          handler: data =>{
            this.getPicture();
          }
        },
        {
          text:'cargar Imagen',
          handler: data =>{
            this.getPictureOfDevice();
          }
        }
      ]
    });
    alert.present();
  }


  getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.CAMERA,
      mediaType: this.camera.MediaType.PICTURE,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 800,
      targetHeight: 600,
      quality: 100,
      allowEdit: true,
      saveToPhotoAlbum: true
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.image = imageData;
      this.events.publish('change:foto');
      // this.image = this.image;
      console.log('this.image:', this.image);

      const fileTransfer: FileTransferObject = this.transfer.create();
      const authorization = localStorage.getItem('authorization');
    // let headers = new HttpHeaders({"Authorization": authorization});
      const photo = this.image;
      let options: FileUploadOptions = {
        fileKey: 'photo',
        fileName: 'photo',
        chunkedMode: false,
        mimeType: "image/jpeg",
        headers: {authorization}
      }
      fileTransfer.upload(photo, 'http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/users/upload-photo', options).then(data =>{
        this.foto = `http://dappapache02.eastus.cloudapp.azure.com:4200/${this.fotoId}`;
      })
      this.foto = photo;
      console.log('this.foto:', this.foto);
    })
    .catch(error =>{
      console.error( error );
    });
  }

  getPictureOfDevice(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.camera.MediaType.PICTURE,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 800,
      targetHeight: 600,
      quality: 100,
      saveToPhotoAlbum: true
    }
    this.camera.getPicture( options )
    .then((imageData:any) => {

      this.image = imageData;
      // this.image = this.image;
      console.log('this.image:', this.image);

      const fileTransfer: FileTransferObject = this.transfer.create();
      const authorization = localStorage.getItem('authorization');
    // let headers = new HttpHeaders({"Authorization": authorization});
      const photo = this.image;
      this.events.publish('change:foto');
      let options: FileUploadOptions = {
        fileKey: 'photo',
        fileName: 'photo',
        chunkedMode: false,
        mimeType: "image/jpeg",
        headers: {authorization}
      }
      fileTransfer.upload(photo, 'http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/users/upload-photo', options).then(data =>{
        this.foto = `http://dappapache02.eastus.cloudapp.azure.com:4200/${this.fotoId}`;
      })
      this.foto = photo;
      console.log('this.foto:', this.foto);
    })
    .catch(error =>{
      console.error( error );
    });
  }


  changePassword(){
    let password = this.formCode.value.oldPassword;
    let passwordNew = this.formCode.value.password;

this.userPvr.changePassword(password , passwordNew ).subscribe(data =>{
        if(data.result == 'ok'){
            let alert = this.alertCtrl.create({
                title : "Cambio de Contraseña",
                subTitle: `${data.message}`,
                buttons: [{
                  text: 'Ok',
                  handler: ()=>{
                    localStorage.removeItem('idTokenUser');
                    localStorage.removeItem('emailUser');
                    localStorage.removeItem('passUser');
                    localStorage.removeItem('authorization');
                    localStorage.removeItem('role');
                    localStorage.removeItem('patientName');
                    localStorage.removeItem('image');
                    this.navCtrl.push(LoginPage);
                  }
                }]
            });
            alert.present();
        }else{
          let alert = this.alertCtrl.create({
            title : `${data.error.message}`,
            subTitle: `${data.error.help}`,
            buttons: ['Volver a intentar']
        });
        alert.present();
        }
});
}

changeType(){
  this.password_type = this.password_type === 'password' ? 'text' : 'password';
}

changeOldType(){
  this.passwordold_type = this.passwordold_type === 'password' ? 'text' : 'password';
}
}
