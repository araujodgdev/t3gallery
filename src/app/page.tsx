import Image from "next/image"

const mockImages = [
  {
    "name": "diego-marin-8i_pvt_j6D4-unsplash.avif",
    "key": "uxL5QSsQ0DaRmI6w4RdgMQaAJOT5ZVn1UrsWf7RyzvuYeKk3",
    "customId": null,
    "url": "https://ip8qj2qupw.ufs.sh/f/uxL5QSsQ0DaRmI6w4RdgMQaAJOT5ZVn1UrsWf7RyzvuYeKk3",
    "size": 7666570,
    "uploadedAt": "2025-01-18T17:42:23.000Z"
  },
  {
    "name": "evgeniya-pron-dFUIZPcQCUM-unsplash (1).avif",
    "key": "uxL5QSsQ0DaRO9aVc4Nz6bfRYPH9ltiTy5sIvcWXxEU07S4n",
    "customId": null,
    "url": "https://ip8qj2qupw.ufs.sh/f/uxL5QSsQ0DaRO9aVc4Nz6bfRYPH9ltiTy5sIvcWXxEU07S4n",
    "size": 444211,
    "uploadedAt": "2025-01-18T17:42:23.000Z"
  },
  {
    "name": "tianlei-wu-_eG1p8Ksxpw-unsplash.avif",
    "key": "uxL5QSsQ0DaRSHP6oDCeCU6NMKTzyRLkpSh1PIJvQ7D3Hawf",
    "customId": null,
    "url": "https://ip8qj2qupw.ufs.sh/f/uxL5QSsQ0DaRSHP6oDCeCU6NMKTzyRLkpSh1PIJvQ7D3Hawf",
    "size": 2159691,
    "uploadedAt": "2025-01-18T17:42:23.000Z"
  },
  {
    "name": "filip-kvasnak-UlbqFEDxE0I-unsplash.avif",
    "key": "uxL5QSsQ0DaRo69jDRPrmUvyk6JFYZlaG5e2XzS0Hpt7gRV4",
    "customId": null,
    "url": "https://ip8qj2qupw.ufs.sh/f/uxL5QSsQ0DaRo69jDRPrmUvyk6JFYZlaG5e2XzS0Hpt7gRV4",
    "size": 400392,
    "uploadedAt": "2025-01-18T17:42:23.000Z"
  },
  {
    "name": "victor-oonk-Mk69XDUR7Vo-unsplash.avif",
    "key": "uxL5QSsQ0DaRnYjLvVp63BXt9mu8wG4CqDM6cUN7yjzsiJga",
    "customId": null,
    "url": "https://ip8qj2qupw.ufs.sh/f/uxL5QSsQ0DaRnYjLvVp63BXt9mu8wG4CqDM6cUN7yjzsiJga",
    "size": 684918,
    "uploadedAt": "2025-01-18T17:42:22.000Z"
  }
]

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages].map((img, i) => (<div key={i} className="w-48">
          <Image src={img.url} alt={img.name} width={192} height={192}/>
        </div>))}
      </div>
    </main>
  )
} 