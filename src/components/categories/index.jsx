import React, { useState } from 'react'
import { Button, Grid, TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import MediaCard from '../cardMovie'

export const Category = () => {
  const [searchText, setSearchText] = useState('')
  let history = useHistory();
  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value)
  }

  const handleCleanTextClick = () => {
    setSearchText('')
  }

  const handleSearchTextClick = () => {
    history.push(`/results?movieName=${searchText}`)
  }
  const categoryOne = [
    { id: 'scary', reference: 'scary', name: 'Miedo', src: 'https://upload.wikimedia.org/wikipedia/en/b/ba/NosferatuShadow.jpg', description: '' },
    { id: 'action', reference: 'action', name: 'Acción', src: 'https://www.filmsite.org/images/action-genre.jpg', description: '' },
    { id: 'love', reference: 'romance', name: 'Romance', src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAADCCAMAAACYEEwlAAABCFBMVEX/7qr///8AAAD/AP//8az/+bP/863/9rD/+rP/867/+LP/+LH/9LD/+7X/9rL/87Dc3NyxsbHz8/Ps7OxaWlrl5eXOzs6ioqJGRkbz6Kg0NDT57auPj4/CwsIbGxtAQECDg4Ojn3SZmZnRyZLl25/Yz5dhYWFra2txcXEmJia/v79QUFB+fn53dVa8toXV1dVoZkuwqnyZlW26tYSGgl+tAK3rAOurq6sXFxFVVT5APy54AHjcANwTABMxLyLPAM9PTTkiHhUXFxCjAKMlACVrAGs2NyiPi2YzADOVAJWPimXAAMBOAE6dAJ2FAIVgX0U6ADpIAEhdAF19fWARABEgACBYUDoaABrmgY+lAAAao0lEQVR4nM1daXvbNhKWad42JdvxRcuXLMqJk0iRZPmQk1Ukt7XSpI26zW73//+TJWZAigcAAtTRzod99mlkAnw59wwGlY210KGmXaxnpTJUWc8y77V/MgprAuE8BEG7Xs9a6rQeEHY0oPdrWUyd1gPCEYKgna5lNWVaDwgXFATtai3LqdJaQNgj7z8BFI7WsZ4qrQWEXfL6QRdQeFjHgoq0FhBek7e37OE/lRfWAgJ597ZVcYf/UL2wDhAOyat3zEqlOgYULtewphJV1iCjp+TNa5WQauNS/sLb1yvZV0wV7eRwtStsbJyE7z00CAgVYwYo7Cv9/Xtt5SCE7uyrlS7xirx2wwEQKjbaiJM96T8/uNHWAcKKPTk0kDqCUHHbsOL5geRfP6wh6qhQV+7t6pZ4Q57vViJy+7iilBTu7WtrBEE7OVvVEtRAxmT3pF3oB7o5NR2iTJXzCAXtYjUaEiLIW3MOQsVq4oJFkr4ThxyrBuFGm9PxKmCACNKvJMkMHpH7hBr5cr6xVYNA7NegHwvF8nUDkeoXNwVCRd8eF6miKPp++Sv8n3dL31WKKoTlprbfjmA4P5K3XlJEHvrVqmTIHmgi7/FtJKV9j/zweLlbylLlGPe4RYM8Qu9lzZcMgc/c1LMgVFyqHi8YIrEbyeg4sLbWAcI7Ig7hh9KNIOYG7d3ypAJ85u0cBqF6pIpB2838xUPEBY8dW69YBIQV52gr17EB0y1/MNdF73eWswDhtLHBAKGiO5T5rhMC+Oo03kGjSrzMtYBAYv1upLe2/MZjvImTqyWIBSSV+iYLhLnHEDtOh9fx6l/rqEesr2Qri29ERBXiz83mytusdsZzdrg4WjSs4KmESCQw6aa9CX96cDr3Wab1SJWuBQRSFhknLZhuBwmp0G6uPizy/CvyjDoHg3AxN1rr6Hi+Zr82tyZrAYHI4Iud3pm13RkmcDh//7a02SR698njghAG100tTS+320mDCiCsWieQTzWys1vTvaAxSm7t+LScNwm8zVEJSE69m1in2zSc1D+vRTESz2yS82WI7vaCfgqHEIgzVY4QqwRKdswMbc/O/tZah5+wyxda3XSDxlOaWW/eHH1QQKJAJUTMUItclLaf/R4W+adVu81vydo+c2+Ag+f3ulqGTl5fncmZTxI4PDG9hDQZzUmkFK2MOKwDhDMhCPCdLKPVH2eBCKG4Pt09PBCzBfldPnBgoR3lWtBPzICw6ijysBAEskXHqDVZQCBfXF7tnoVw7OUAOSD/3nEKnk7f1p/RBz41jTkMVncNIHwgywYFqguAMI16q9eesJFAOr85uTh+927/ej+kd8cXEAj165bE4ytEJiJFPAxiblgLCPCxWnK7DDnC8vxmo/3EQ4FNs6YntJLx491G9CfdCIYq4Y9V5xghId6R2mOMhGO4QbMxGAu5IkWThiOjGSpmPfZWuwEIBdTuVp1yhwhHUmyTSOimZVTrQed22v5LCox+XQoGa57YmAWuXjGIJnqzYhBAgfeUQYiwMB3Tcj27HgTNTq/X6A9+tNtdSu1ZBoaaDMOFsUvssw+bnkdEb8V9PhXoqZqWBWG+dZ3gQcixIrJBwt3mPFnTM2SUj+61YkM0ahIQVlzCrUCl8IeKTpAmKDy+ePqW35i/k4TnRNJcrWQEt+pepwrEee2tVYBgkwTNgOBrbvee6fu0a1Jcp9tJGFYOAkkt/ZULI5dBPtn/Lb6z40VZJE2OGUggO5eji2wicskgkBrHSBTxlyUdgsPYBXGsfswMcm5JKEdf59zwfqHkTgEIkNlcBQgOaIJECGn51PpNAklFrFv1xnMMw8nCyT4uCFDqkTLhigQObzppZXfo+9zKiURIptdMKIfj3SWXhigIGEs7uqTnLE8e0YvtNLxmjTLDQF4L6UaQkAptf/k4VDD5c9tqBbpV3XKWCEYdPIMs4xu3+C4zScUAMGSSnu8elisXFQx3kZ6H7UYncA1nGUDoLTAFuUeZPsaKL3WVVXTPTyX7TkrmPDkg7GlZGvabdcNcFAgT9CLjKfo2isSzr7aE4wXTVJTy+mEpRdODqwpmf3I0bgQL4gAZ0lGV9U9RFilQdFRDgW0OUts8f7O7GBA7p6HHXMEOOxaN+oG3QExhE/9/xnZFbaoYZJI5WRzc1jQTte5fHZbSlXtn77HmVcH6yCxoNTuNaTeTLXnpyWaF8lQjD+BVIaOOHUWJQBxCuWjkUn3XV29VeOLg7eW8R6eC3WV/2SQMDAO/etCZppD4EUhFfnlKOs15MkFtas9K2jGBg1HvMDJ9mPsVv/6rw93L49RfXVewg2ASy65uml69mdTEs5ZX5nulneYcOQHyWq0MCLCA5QW3bY1F58fX70+Pds8OP+zsHADtfDg82z06fbPPkv3dygbLZdRNL1l2GbdyhaFCciBgErwiRWG4QOxGUp5B5ysnCy5D8K1fhSBA5SGnokj5Ke7nCnWGqmMNxuFRFJOYqBcUfEcW6aZj1Fq9gWLul7xTowVpqwvS6g+Nhqx6YWiR5s0KA7k8QEwueX5XmKew0EbcquIbKi/Pc13Pim04+S+1oNP4IckUs34n2HYdZMYrAgJ4S7dsNa57rTjv2VH6ZBaJHArSdjaympKh1I1QY4EVe+n2m25i27rjmJ7nB81evz0cjxjvPhrPBqFLXPcME5xi9OcO4NAH+X88W0bClyhfOvQVnBuxcaBkAMIjVl8Xm8xqM1UZfcznsHXdIWbOrTl1PzT8SK0gqDs1d8tyzERw5BLGOcGTL6SVsc3nSd1uRQLXkY6A9YAnZCmqwgdrSz5WN27zZrHPl1M9SYx/hw91iiCQBBu7wSx6WJwH6G5Lsq4Df1FU46RYaU0pfWMFlMe/fPzp7tvdTx9/LiOniT2CTvqAIBBHYSTWTmaN+uwTSTOBaaViJ8BEeGW8BapB/ri734zo0y9qnybzQAjPNxAEaKgv6qQwWpQTO1KZafOHxmoDYjy3KykQVfjhH583U3QPMKiF5RGBNFxSENiOQpb0beqe9WUk2CB92V2ZX0KMUVwSxvOEd5s5+vwvAncJEMwelQYAAbsIijV/pBm6Eh/YIz8Ud2xRQu2R7YPPrU2+wJf7PAYh/Rn+05N6lhTC3PMNCgLYyIaEbjKpZpoVr+iQ38mVOG0wwRxHhZJFvtoXJgQhEZGYKtePYmlAEEhQOZBqqqlhqm9Y8N1kLST+FnajMdMvyZ/8j4fB5ua/ZQQqQ04sDQgCsZHCjss50XMK4wLIMMEo6QpuTYEVBawABwk/8UHYlH+BmDwiDTcbMQhQf5E0tgYaqplY56EJLuzdo4S6kS87wFe/CjDYvEtqNZ5vlKbIU4pA2JVybCgZWGJuCyVC1k1AQh+er0EgIhVhsLn5JWQFFxqrPL8VUmB7ljBpjmvuzEH4IGWkIqIN+n0R6zhk2y/STvY2+GHcn1tFjLC5+Y2oILuaaLGbtHuBoFUKolyUBgRhT16VE6ISITKqFtH4Q/laW1+kRyFJJdIIhEIXepbORBP3ocFrjtFpFD0HAbpVvsrnCwxcTaD3wAYLgrIs+SI9Q6SBax6TWoFFnMDCAdgPkiDsK323yOse8WW+SrIJ3PA8T1ttgVoyRoXSsAkGIqSfv999Cl2q+0/ffvoT/0ubiQJsMGqeRxCUy/M18Jr4mTGryOhlCE0q5w8Im3wuBOFjyC6/p4XmM+AwY3ggmAZ+SIGAlWkFb4OGwFxlCsXYjsIDPRKecQ6MNQttA7zxR4ba+Ez2wXDzoWNa20uBwE0zcgn8WO2RYycRIxUfzpxyvwPxOX4uBoFDX4hc5lzqKlkt7pOlM1WAGZUyqTgTo8/WfUVFB8ZfgDz0WPJAdNi/S4NAzEZuJ+jLnWVAOFFT5oTQ42frMgRB1v0CgrCzy9qCGRqHP8uDcK/lY1QjSqekQCCluBe1LBW6XAOmGGOorgQqSOkj62nkX34pDwIYz7QTpM8DyCQIUIWSdfUpGSOuGKPzoxTRIIeyXI9FQSAx5nOKFXB7H7IgSB3Yyr4pZEOYITioOWH5KUeoS1md5iRTtxAIn7PvVn3WYpc5AcKeumak7jczSoKIRzG2rfG24ISI/rYICJt/pLUNaqyjHAiQV+kWpUqyu+vwNDp0783UdIz9xFHOJPtR6DUL6S79rdCw7eVBIKeFn1Xz91BqY3k41SFP1QseRjTjE2MLIHYLgXCflgdQi8kjFBEISimFiJwpR5m5vK8qIHSXGCIEurwoiBTTl6SgYa7jkAHCDk8tiQiVGSMGt1805fMDuDeWHiHagpFrV6Bfkp/EmKTVYmIKH/h/qn1a0LTKiIBtYj0VT5Jg4pMlkcS1+bgQCL9i3gkopxYTIMDEC1WlYEJiIV9U3pqoGxt0FJgGN+SR/ywEQqgZJ9G74fS3PSYIEE0rpBRw4x22UmB39MqAwKoeQFyxkFK4m2t99BbTx+tiEA5VQx54IsfDKQUCVydU3IlMVkWOE6xp2ltMgVDKXeK9rV8GBL6rTXwvQemlmBI6AXyyzGSO+XhS0qrBaUDlk02Ef5AzA2VAAC/zhQkC6LLi3BKf5tYBhW6XB8IlW8eJySO2sM0GoahXJ/uoJ76D5T0vZh/+GzM5bFjb4IHwtoxS4HhFZUCoC4w0hH3lMfgUvxnmbrKH6+YglI+hOCCouV64Pc7fgEov7y99D0Na3CPax+yRkcTI4hu24yMk8Ip+sBWjGggY4/Mcd1K+L59nJJ6bFYOZP4OfAAGUgmJixXpm8jCCoOQ2eyNO/AS0kGr8NUYX5hXlB6MmQICuHcXECkf41TkBpYFfrjFeSicV7ucSy7KPaRBAKUh12GS2ntem6ooR+7f4hT3ztrTX+GfMCOiP5Q/bJseYk9Mfamdl0ermBVkZBHQ9RZVAVyuZZCMZFVoZIM/ALiU+CIxpqkUgEG32mHculJ0lZASRLEJym924JSRiHkdJR4lxq0AShB1lJuZ1K6qCgIwwFnIhkWd1h+k+IWXuiOEoZUGAnIJSUsyBlFg+NakaQGFpUKyUIfJRZYV70uTYw1fCRAJrCkEKhDeqnrO1JBBqxYyA7PVdDQMiC3F9CDq1co5SDgRlI8kTB0stqYJpiaIitkTnUoZID0/cMYyWjDmiJn3JBQCnIA+gGJ/zf6CYXkNpKPw5YQWVtMJHeJ2Iv6B5RmMelUuDcM1+Jz4IaCJzn1Ax0QrF2OLkNGAlDcHn/5CnNiKri4zAHtiUBmGX7ftwiWaWcm/rqrUsSboVsNpPchB8+k0D2Y734ELFhT2COA0CztZVMJKg0fJRF6woPgWWfDmO35kj4k1IZVw/Yb9S14k/D67BGV+WufiG5JwnCk4jSnNOHuA/S0+r0UEvSoRu8CbfCiH4hlwwaSY2YAgYIQvCkao8NJMKOCY8MS8LpslNtmeJzCArKEve//5fgEBrWMmTciC3vGF+GRBgHJ1KEIWV6WbmL9T6ExAEGSEsjKi/0b49Ov47Juw55A0lz94DRYIoXjsW8wXwmGtmEgKGa9LiAM+QaoknWQdu687njxSBp9s0BFQjcKc6ZkF4UJSH6Dqf9PkwtZ4lamNkFoU+IKbv/On7vygE7ZaR5SoY5adxBzVlQdhT9Zcq9WdYupc8Wq/YvSbpJxAi5ijvO3/69X8UgTFr4gNuhz/ZMnctGly3oxI/0L5OMll1fnZZrY9xC7hJ6mAAUbkZK3n/Oz0fqY0agctSLS7k2flzFXIg7EqzZkRmEIliz3ctMqRId6CtV3ysKfkEsJFSsQbAm7SSd7/R1R+ngcueAoOPFwy2zF+QR/5ArdPG9F+06Fu0G70mmUwi/VZAePRFKslrPCVUY6wKtUHL487BgYYEZvjIBQHiabVZJ7o71Rgkr1qwJ1JwvEyPj7E4c9V4F4lBu+kJRr9gU6VormUeBDgGo9qukZisOqehvH7dhrs1+F3zfrcXVPE9Sa7iLtQE36NVOjXx8BtkM9H8HcZ9kaQIo+I6A+l20H/MgDBif1nd93KsS+fMDDjL0k5P+P+kM+43PB1MRgf4RXNvsBYvHGvJAAFcZ8X6Q4XOYYknOgMgbH1vP2tP7azq3aKH7NhzAKBYS22W04lRJvOgC083o9oWYcACAVwF8TFn3mEl0zJqdT/w6zXB5IA6U2naeBL7ucn4sniuIFIxNQrBVGr4ETpz4sGerOtTr8Wq0fK8QOgM6sITsjqnPEXvUNRmQXaiET2jHfnVGBA2CjRBtBrIWcF1KSwQoHOHc5IhZMfuSML68VOt3EjBjkzMsLMdDwIkE+Tx2Flsa0Kz/9xzJX0QKHHyHWY+CDiNjefAQXNKYerMS+07SfwZG8Zc2ru9Vr22ZVt1v0MZJDHKzu8x/UIWoXksmoLOBAG8Rl66C/qWC3MF4AkzkvH80l0le/3L4+hlPiJnkvSk5O03MKTIT+KDAF4j7z2xwarIu+MV6IQghGyWHlo9twMKczyTjwM2Kpz6zAbhlKvWIpkuMqF8pheCQGZ35+epTUqOjkGtKDaPfBAgwcTzYmtccU+uj+aBoTrEIICH3Gkn/a5ux1L0XyNCrVh8LyznhnG4HZ4TCoOJKsw+cfuwMKYTBie65fmtXqM/7Tdug2rpiZAWRCQSt4RwQIACNaeBCTuxi+QBnDzWEySHbOgOIXORmbm+lFbkg4C5FU7ary5AKCYT2oNYslym07MM4awWiTuLuSBALMmZfoTFhoLEqM7p/ZZ1NBYmFDtGX4o8CJB25rwoKt2CaZI6t7bmEmdAOUxVJnQRpKbgc0EA35kzUQmz+AUD06qMKeZAmI9XH9SrRtgAJHdPChcEqMhxDASywqM4Mwqe5YRhRFAzKjfUqxGth0hhIAABtAKnnww9MfHkLTQirA8O8wc5GZdlEQqD5KhzPghoIDimDNdoCOcX8k6JUcdbPW2jQJhFkL05SQAC+ArsAwjRBEHhRD48B8/64KAzlQ9cIUk5DljdlBQGIQjoNnIMOp28JRrVaYLMsGIoo83zqQvJaTTt4m4OX0UYxCBABMHLK+BoQNG0JYyhmGOAQVImomlrPKrDbPWCH0GjjMINWiIQMJjkhUo1rLh0+SNS4Xsw6/zICiUmNuPlObdikcAf3YjeTAEEvPWAY9H1Oq07NXnjvT3CLOwBAsiv6gIBCvmxYJQqBtAKN6SLQYAjQbwmS32bJkAStzumCI0k09XAtJfyBQ/IQQVxB1ouRgtzSRDQY2KOe4E9RXO+uk2XobVRP7HPMGAzmaLfiB5QgS7BJyvdOlsAAphJfi4tHmVMquKZsXe6Y0Ij7YQt+bStwVc5D4BCJD5RQwfDKd16UQAC6kZ+2GzW58mwx3av5Vu24Ybk2X7QmeJEPI7rTQv6LemCpV6H6nKBn9pUs45SIMBsOhH4mfv8nkdPs9lsOEpM2uaYF6q/pO/F0mtQi3sU20dUCIoX6hWCcCgWiPTMezZxPI0Ihfa2jEg49OYksRbBZjrVa6gLQcB+haEo/NcNv//CAQC+NYePIhS0TvFVIga9JKZAIaBwql6DUwwCOgsNseg6RsC4bXk8ha1zD/pFXzc0suLaajxFXXwXxBZOTlW+TlAChEMJNoSrRwy/ddv/AVfI/uj3OkHNcLZg89wOrngqOLlYhvuNTTe6a1I8Qp0qxYfiV1IHAS2EYAJlEgnHtLZCIoli8uZoAwTdeQkj2/O9vLOhO54fd3+ILQm1NyUu3ZUBAaYKKE9hoi8JtkNQyU8a2XGjVTMsM7qRwTTdqt+Ljc+sLtQHuv9YRilKg4B36PXKXCqJRTthvSptZJ8GjQ65mCNoNXv9bkLNFJlSC3TzYwkM5EDAGKJcAgBLYeKmDruVuYE6T/3tgsUxfBZ0bC4MAgzkKpchxqzCVzEXESMruKZ81Ci8nZwax3L3J0qCgGphUiZD7E4KWYGQWW31WTf2aI+DZnFPBu1yeVsKA2kQ8FbJpxLJIKxCs4dXpogYgma/m0Ri/KMXuBIFWYqBSvhcBgQaT7LG/xYRns6VE6XQ23DteqsFtxbpriFXkKW3wZS+jF0aBDw5qrXVy2eoFVRmY/MvLWISjZ6LOpOWAQI2eXKbTgWExzLlrjkqQTY6y/zjDMsEYeMKUVBOj0pV7UoT5QOJXoylgIBTV6Tv75qTXTa5LPPs6cIYqIGAYXUJBxpTHapDnGTIw/CyjLNcFgSKwlj1Bi6s2q1AIKrtJWCgCgJ1HUcq9wUSwnqVuiCJSbeGi+rEUiBgXB2ytuKoOhQI5fsxxRjU8WCBbPF5eSBQS6k1FIee0071JbYqWTRfXSKBsDAINKQMw3slw0/PM5S5SJrzQJqOkWlPWz4I1IMmRUiVTWO8X+IONw4G9GCA+DjH6kDY2KOXU7d5d+uwiNaPVEfcscmp06uOlJOqSwMhVo/arcL147SXSur+xAKyaQL+RqJddXUg0BR0yN4taRisGn498V1iEqQbVBQWNY2LgrCxd01hmHEK81kI6vFV3TL3TYqeFLwsTSUuCEIUW4c0bBadSNJtP3mGdlzuCAc+qhqBuRR1sCgIUUBFPMiGz2+n0i13fhk0Xng/UqnIp8ho0czTvmqtTUALgbBxsB9/3SGpneTyQCRT1Bw8Rz86P4tUarOUerTiIoV6mUlAi4EQ+gxzGLTR4DaoeYZl4lEFy7X9ZiNRsT4Hm049zqmrLBImnuII6WI5ViGiRUEIYXitJWk0G0wbPXJspT1OHZ4+idwa6nG+BGrhh1m9jTiqbEKVR4uDsLHx6upcK6LXiYpA5HFOiwoqSQjc2ygNvb9cNthYDgghfbgU4bC/m9FikQxJnvLUrXoj4qrz4nNdyrQkEELaObrOzg4AKbg8Y+hxqhi0SW+7KJjQHbc1vw1z2ZIAtDwQCL06O3q/f0I/2cXr090PPEN2cBy9Vt83+Of/dcfwG/MumNMl2sUELRcEFdqNX20cWtd8lUU3HcNt9Z+0VUPwd4Iwj8I0Yl07Qd12LZOYV5NY15rf6Sdr1Y8rEQSkvxOEjb0EDCG9hNa13yDWdTDLNIK9K1lqlaO/FYSQHk4YyjRDN1elug7k6e8GIbQqpzciBI5XjcDGPwGEDbCuTAAumOZ1+fSPAIHQq7OHy9fHN8TnOr85fn15dLZ6Dojo/5W4hr4h9RfiAAAAAElFTkSuQmCC', description: '' }
  ];

  const categoryTwo = [
    { id: 'superhero', reference: 'marvel', name: 'Super Heroes', src: 'https://i.pinimg.com/originals/24/92/00/249200c431fe811110761709b303fcaf.jpg', description: '' },
    { id: 'kids', reference: 'toons', name: 'Niños', src: 'https://i.pinimg.com/originals/e6/84/49/e68449b851a8ffb8256a71daab209775.png', description: '' },
    { id: 'comedy', reference: 'comedy', name: 'Comedia', src: 'https://thumbs.dreamstime.com/b/laugh-out-loud-icon-laugh-out-loud-lol-emoticon-icon-logo-vector-illustration-outline-style-178973347.jpg', description: '' },
  ];
  return (
    <Grid style={{ padding: '35px' }}>
      <Grid container direction="row" style={{ paddingBottom: '35px' }}>
        <Grid item>
          <TextField
            value={searchText}
            placeholder='Buscar una pelicula'
            style={{ width: '325px' }}
            onChange={handleSearchTextChange}
          />
        </Grid>
        <Grid item style={{ paddingLeft: '15px' }}>
          <Button variant='contained' color='primary' onClick={handleSearchTextClick}>Buscar</Button>
        </Grid>
        <Grid item style={{ paddingLeft: '15px' }}>
          <Button  variant='contained' onClick={handleCleanTextClick}> Limpiar</Button>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {
          categoryOne.map((item) => {
            return (
              <Grid item xs={3} key={item.id}>
                <MediaCard name={item.name} description={item.description} source={item.src} reference={item.reference} />
              </Grid>
            )
          })
        }
      </Grid>
      <Grid
        style={{ paddingTop: '30px' }}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {
          categoryTwo.map((item) => {
            return (
              <Grid item xs={3} key={item.id}>
                <MediaCard name={item.name} description={item.description} source={item.src} reference={item.reference}/>
              </Grid>
            )
          })
        }
      </Grid>
    </Grid>

  )
}
