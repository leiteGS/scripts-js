const phone = require('./modules/celular')

jest.mock('./modules/carregador.js')

const carregador = require('./modules/carregador')

describe('Poc mock jest', () => {
  it('Should return charge 70', async () => {
    carregador.sendEnergy.mockImplementation(() => {
      return 100
    })

    const response = await phone.charge(25)

    expect(response).toBe(100)
  })

  // it('Should return charge 0', async () => {
  //   const phone = new Phone()
  //   const response = await phone.charge()

  //   console.log(response)

  //   expect(response).toBe(0)
  // })

  // it('Should return 5 if not mocked', async () => {
  //   const phone = new Phone()
  //   const response = await phone.charge()

  //   console.log(response)

  //   expect(response).toBe(70)
  // })
})