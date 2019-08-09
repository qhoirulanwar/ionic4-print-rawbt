import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import EscPosEncoder from 'esc-pos-encoder-ionic';

// declare var Socket: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  encoder = new EscPosEncoder();

  // https://github.com/Ans0n-Ti0/EscPosEncoder#readme
  result = this.encoder.initialize()
    .text('The quick brown fox jumps over the lazy dog')
    .newline()
    .align('center')
    .qrcode('12345678')

    .align('right')
    .line('aligned the right')
    .align('center')
    .line('This line is centered')
    .align('left')
    .line('aligned the left')

    .newline()
    .encode(); // return Uint8Array format

  // Convert uint8array to base64 encoded string
  // https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string
  u8 = new Uint8Array(this.result);
  decoder = new TextDecoder('utf8');
  b64encoded = btoa(this.decoder.decode(this.u8));

  constructor(private sanitizer: DomSanitizer) { }

  sanitize() {
    // Print use Sanitize link
    const urlintent: string = 'rawbt:base64,'
    return this.sanitizer.bypassSecurityTrustUrl(urlintent + this.b64encoded);
  };

  openWindow() {
    // Print use Window Open
    const urlintent: string = 'rawbt:base64,'
    window.open(urlintent + this.b64encoded)
  }

}
