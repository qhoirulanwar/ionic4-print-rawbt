# ionic4-print-rawbt
ionic 4 Printing receipt use RawBT

### Install on Android
- https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter

### Documentation
- https://github.com/Ans0n-Ti0/EscPosEncoder
- http://rawbt.402d.ru/app2/
- https://rawbt.ru/start.html
- https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string


#### add allow-intent in config.xml ionic project
```sh
<allow-intent href="rawbt:*" />
```
#### add script in src/index.html
```sh
<script>
  if (global === undefined) {
    var global = window;
  }
</script>
```
