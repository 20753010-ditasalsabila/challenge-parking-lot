let Car1 = {
    nopol: 'B 1234 AA',
    pemilik: 'Dita'
}

let Car2 = {
    nopol: 'B 5678 AB',
    pemilik: 'Fazrina'
}

let Car3 = {
    nopol: 'B 9101 DD',
    pemilik: 'Sehun'
}

let Car4 = {
    nopol: 'B 1019 JK',
    pemilik: 'Hyunjin'
}

let Car5 = {
    nopol: 'B 8790 KK',
    pemilik: 'Kyungsoo'
}

let ParkingLot = {
    capacity: 0,
    remaining: 0,
    cars: []
}

function parkingLot(capacities) {
    return new Promise((resolve) => {
        setTimeout(() => {
            ParkingLot.capacity = capacities,
            ParkingLot.remaining = capacities
            resolve(`Tempat parkir berhasil dibuat dengan kapasitas ${capacities} kendaraan`)
            // return park(), leave(), check()
        }, 5000)
    })
}

function park(cars) {
    return new Promise((resolve) => {
        setTimeout(() => {
            ParkingLot.cars.forEach(element => {
                console.log(cars.nopol !== element, "nopol");
                if (cars.nopol !== element) {
                    console.log(ParkingLot.remaining > 0);
                    if (ParkingLot.remaining > 0) {
                        ParkingLot.cars.push(cars);
                        ParkingLot.remaining -= 1;
                        resolve(`Mobil ${cars.pemilik} dengan Nopol ${cars.nopol} berhasil parkir.`)
                    } else {
                        return "Mohoh maaf parkir sudah penuh."
                    }
                } else {
                    return `Mobil ${cars.pemilik} dengan Nopol ${cars.nopol} sudah parkir sebelumnya`;
                }
            })
        }, 3000)
    })
}

function leave(car) {
    return new Promise((resolve) => {
       setTimeout(() => {
        ParkingLot.cars.forEach(element => {
            if (car.nopol === element) {
                ParkingLot.remaining += 1;
                resolve(`Mobil ${car.pemilik} dengan nopol ${car.nopol} sudang keluar.`)
            } else {
                return `Mobil dengan nopol ${car} tidak ada.`
            }
        })
       }, 1500)
    })
}

function check() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ParkingLot)
        }, 500)
    })
}

async function parking(car1, car2, car3, car4, car5) {
    try {
        const newParking = await parkingLot(3)
        console.log(newParking);
        
        const carPark = await park(car1)
        console.log(carPark);

        const parkCheck = await check()
        console.log(parkCheck);

        // const carPark2 = await park(car2)
        // console.log(carPark2);

        // const carLeave2 = await leave(car2)
        // console.log(carLeave2);

        // const carPark3 = await park(car3)
        // console.log(carPark3);

        // const carPark4 = await park(car4)
        // console.log(carPark4);

        // const carLeave5 = await leave(car5)
        // console.log(carLeave5);

        console.log(carPark2);

        console.log(carPark);

        console.log(carLeave2);

        console.log(parkCheck);

        // const carLeave1 = await leave(car1)
        // console.log(carLeave1);

        console.log(parkCheck);

    } catch (error) {
        console.error(error);
    }
}

parking(Car1, Car2, Car3, Car4, Car5);

