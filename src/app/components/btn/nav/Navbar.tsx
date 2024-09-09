import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
export default function Navbar() {
    return <header className="w-full px-3 shadow-lg py-3">
        <nav className="flex w-full justify-between">
            <div className="flex items-center justify-center gap-52">
                <div>
                    <Link href="/" scroll={false}>
                        <Image
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcIAAABwCAMAAAC6s4C9AAAAwFBMVEX///9AQEG+Hi06Ojt4eHg9PT4vLzHKyso1NTYyMjO6AA7y3d5cXFy8ECO8BB1/f3/dmJ67ABX4+PjV1dWlpaVTU1VJSUooKCnSc3nn5+e2trbpxMa9GCi5AACwsLGTk5TGRE7w8fGJi47CLjz78fLou77Hx8flsLTf39/bj5XXhIqamprKU1zOZWzw0tWIiIj24+XEOkVsbG3UeX/NX2ciIiTgoqbHR1FkZGXclJren6PYiY7BKjciIiPuzM7iq644vY8bAAAOGklEQVR4nO2da2OiuhaGqRQEFCygUilK8UK12mrbmV7dM///Xx2uSQgJ0mIHPM37Ye+pJtwespK1VhI5jomJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiakpMtp2v1BBmc7FzeK+Y9R9qUwkjXqiKEsFks8CcldjTdd1bX/53Kn7gpkw2aJ0VixhGBS70luhHFVTZk9/6r5oJkQT6wDALMIYo7K/mNd94UyJzMMEcwhDiprytKv72pkiDYQvIQyk6resJTZAZRohBWGrpTl/675+Jm59aChThLDVUjasIdatc74SwpbqLOq+hZ+uqghbzvii7nv44aqMMDCml3XfxM/WERC2tF9138WP1jEQtrS7um/jJ+soCBnDOnUchC39tu4b+bk6EsLWuLpv4dnrtV/9jurRfLFaLerxkY+FsKVXjZiuf8uSJMqnCfF5rGuaPn6u49xkhDwxX6g6BQid62oX0hPjt8Wyj3Jf/1YfSvwQlI8aTk5CKMnn66yirP3qaePoukpthp9x8Q0XaBJ94KexWoH3aHW2WJ3GqKOkD0GpIR1OQChu6bMr5ldPjk5pjONPdAUGmCUgnmPXIdKaofEbq9MYrbT0GWhv//7seYSSe6DK4oUMUf2EZ2GA0/IxjiHIeUl9Wh2QVOF75c/0L3SnfuUZHEs5hMLZ4UqLvUZiqNyXPm0O4Sv4QKZZyeYifAIItbLO1fztPdFF1UksOYTURpDRrUJAqG5KnzaHsC8CQ7qk1WkswgXsC8v6Vp2xlmhc1fbmEIrlRvVXpOGpXrozzyE0hnzaE1PrNBYht0msklb6JYYjIK1qpiePsF2u4o7AUH0qe9ocQm40EHlB4C06nQYjnL8oquOoykvpEV0TEHK7Vp7huOxp8wg5zn4cDHoFZ28wwsCW3j083N2UL98IhFwnP6bRy94ECeHBOk1G+Fk1AyG3GOcsadkxNUPYDITcZa4dqoVrLkambZuj8F/lES5hnQKES9O37faSFtjJHs43SVc5Cg7h00bDX9b8/s/NzdV9ro/cQYTvFU9RCaGR6w4VupOzdAVRlGVRHE6MPMJ2D8hE6myluM5gQkdo2I9BqaiYPFhnICzPwVHDgXb7PDmc+IjdpdcfJkfoBa+LDy/G494ugZAo9jv89ILb3YE/Mk5F52IWLkMJ16I8PAOKRljuDjw55+Up/Lu8T42rEkLuBs9e0F8pV5SSAIwgD5ccjtC2+EQWuABjC1Z7COJgyRERGsGbAe9BkMRX5BUwf4OjTjjzFRbkxXO0Ja4lWQDfrAMnNa0mjribsZpI28OzqkDjq8DJS/9QEKu4u9M1CEpT0xC4oQcFkXffSY7yVVVDyM2wZkjrDL2BjJxDEO0hjlDOXcBoiM5xFWQfFEEQ+ryETUcP/BJAxwQBA8kOXhK0mNQFxzBeRfQb8bwPTiyNAlMDbQxoKlfADjp7Ssd2oWAZAW0fVzdImQK9NoTPWG/oPBCLGQJ2GgiHitDD68A/IcK1RVhPIA3TPhEiFDLvUCg5jQUbXWw6NHLeACH3Ae5RBeGzSxhSeyMj/JVPrzpKxKlhCOe5QSnRuX2kJ5apCLsFdVKErkj+PmUIEZ7lUUujuFCvYEJ7WKYD7tGZJedFWuZ4R0T4ix5FbhhCboNZUo2UvLfJTzp+3BSE/aI6CUKbtiCET6ykWXCQNJ5u/ldQJsL8AO5RTywpnMHgvHAkhE+UedPhG940hLglJeU8DaFg9RQFoYfbvUydGOGIDiixkoUIkzMXWIgEIRy0pYkIaEf1cAiaQ3iFGCcnEHzDL5uHsIO9bjphcGwX4iAj7JdAWDTvx4qsZCHCaEYQNypc2hUhnEMEanxHcDDTCodOOYSw3bb0/WYzgwlWvdM4hHPn8KV0kUYoyJZlIV4ADeEAryOjdSKEmUYohYdF6khRwiODkBeDIki/F2dG++gnElYk6S9ho4vHpAvw3sYDHBwhHK+21MhR/ANG7upT4FRomoZgdKKUU30I0ReOgtBAOht+OBkZnv8K2xgZ4UhG69hRHYgjRoisqxP4flCkjRz2TAqbB4rQ2pqGsXTRAU54lFfEqRT6S8Mw1zz8KEZ4D5DEyGCWPu43cIRwgKAkQ4M5CIKMOW4VCGaJnV9vwd8fX590Uxnhy0GEyHPkB4nLNgGPn4zQR+q8JnVge4kRwrkaYHC5hVSjw6Cn9vGjxAjhUYRhchQPmo3kwOA9Db1Abg4f/0v0NYYQWiaYfQNjhuQBNSXAFgobkhKGMxOkyYEgJnhIZISIeRNTRx0LsHmwE4MzpqD9ldZcxrVPJyN4EFmI0IP3L4KwTsa1D/UOBm2hJYV2VItXOWMI/0A7OgMCJVakKlV0bISEGcEubD0gI5+LkWIIt+D7CEVcJ4sQcduH4FxI637MlIEzcgDlCOEIvisSOEoOIXR/Q0v6C9rR+PXCeKCjdCcR+CCJXzUJIWZI1bxrD3HAqdqHECJzEmHINIuwLWKHCIWGY7gyCJewAoy45RDC3i+wpIidTFZWYjzeiG59egCi7a2iIw9nQPwCEUQITdUnEILUAx0hDJlCF6EkQjhuiirEyiOEY0z9HtpRPcnLYDw+ChHOSFVSmW2YaWkH/zbawdPw/El/ggTvMVV2KrALJMz/qdgKIfYsQp/UCpefbYWIIbXAUfIIYTxfXQEXAwSEMR6rryNsT9206x9NpyPOm04NexrInVJnsB/ZtdcIiwpgXwhnGX+iLwSTIul9IWw/8DAl+0IP3jksQkAIjeMemB0wlsR4vH8dITedpq/sZBrcuee6/am9HJlrd0pLR1dF+Dd7uTphHiU6jAdpoAMIoc8nCGmVghEpaKnQy4tel8MIM65JYiR83C/kUCcAudm038d4LJDXWtVw7UlVgOxpMnwz3BBmgNCNpyysXdpChaoI77LRIoWQqEB9vNTk+Qf8QiQmJ6U9HZ4vFBCPLimCxMaj+bAlEKIPQOz2fX89QOIBACEyDAV0QG4U47GDQXDqvFJYRc3sNhGZz1Dt6ZQLEU4TP8ymWtKqCLMvZzLcygppLmfSq2lwxnJ7MDqDPsbHZVinh0dnXCTpOGwH7XuEHPZMDm+9BMJMAFeQZDmTQoYIF7ncgwKiGHiTQlIbyFTtHRo+hlWiGeDQFQvsZvR/dxq+gwHCxHC1vwshNvOCPEBGbNUZLw67wxIx0lwdNOceI1wimIWgyEBGopvxYUsg9Ioi4QhCLmdJNQKP+AEgXoV+mdC5f9L2yFwPBGFLf3gYg4iIGQ9ollM3fAf/AcLrrFc4Ji717WdyqkI29URB6BbWiW1rJk2EFfkddf4lEHK9g8mmWLfYIAVZh4YjnCNF1fHL7ep2oylqS0Mmu6MIA/9fg5vZudPwAUxiYt+P8Aqzo9fEUl7RPm8UhAW5QIBwSS+TdKBlEHpF2SYEIZ5WQ5LbubHJG1rWUbVkthMSQN5lXwhkzpEfDmi8pEv8foR4moKyrsctYEjL2m+L6iQjHGpmXxjGN14GITfJHSUfPw+VjUOhI5X88BKfFpa2NlhnRguJGCE9PxmYfjtCzId19pRyxpCetqchNOSCOukg9ZycGBbSkE4phJybbYeC/IhnKiJl+330dc0j3DlEhogpxewyElsObWhsTb8f4T0290mn7k66FDEeJWawmQV1QEStR2qHvJT6ieUQcv3MWEk2J3nXnkNzTJGQ2yM4ebs9cVMCuLfLLmuXo9Uosf8Q+BVm5FFw345wjs3lJsVHU5lS5jxiv8Q80naGoSDi+cJIfQu/AUHsgudeEiFndpOJygIvdpdIYAFFiCzmxZbzkvz0+Sa/nN3RH2Au7j0zjggzIIH1jHitA38+8eO/F6Fxjb1nhStcR13oSUiWz/G8EEtKEIrJ3wKczT0aAIiBw+Zz/6VFJGQ29/LRkjIOiIREMUwrrSJChOmZeYFDSrpdK5AQrY6DQ90MwvuxAzRG86Id8AW67cdin5kMHO5JnzFTF2P4tRMGbdwkiBb4FdM0+zz9RoTzB4zgoWXa/qsohnvYiPzW44wuUJxDtAfp3wMkJm+/WnGds8BZMoagSGZHh+V0YMW/syFb/GMmDLWERwWfP8JTw3LRfz0vflxwjIpEBEO9XANlbrYzSz9+yGwetLhrKbqmhUE2Rb9+wmeGde60+FtdmX3Mo+BadDqjv05xeet1cgXm+tgBts4Mt/XEGaQZeX7fdSftT/3gzMiflKgTlAoO3beJS5YOy/ydecPhM0FyiF/TvHPz/HG7er75Q5wiPb/6+3b78XyTNOnDC7NI+iLCZw039MoJ77Q+CHpAmFlGhrkHN3BpgnII5RIbaHU2uYChdsJbA4fupSBKvYnfbk966PjIoidam6McwsOrbjuX+bGWSl4OcxJKZ0Dx0SrFTNBucLh2/crPiC7ex67z/oIvugoHVM4J/9YBfVmMdRLbMpL2YHuc2LiCkru/Fx8bTcl1ghHBE/7tH/M3jaDUsK3eKCKtS+BlTKIQ//gdCV/k1JwwQfovHknd0/ixxiNsKeuop/yDhsYrHshLJJ8IwSMg1B5OuB8MZQuEiLokrg/XbIYqI9RPf3N8o38mZqZb8CK/HR2u1xBVROiMT9ijR9TenlnhriXhviUW37O/FiepR5UQOp/YN67x8sx2OPYus/9Qs1QFodb6xL5xTN+lftG8liKEjqZdnMiQ7f9cXtF+D3SEqjKr5TcZmAgq8YPaGEJH01uX7FfRG6S+JaV5bJr4CKHiqKqm69psRU5+MdWm0fpxcEBh5vNqtrl7Wt3k92VkYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYvo5+h83m0gj1DDJvwAAAABJRU5ErkJggg=="
                            width={100}
                            height={50}
                            alt="Picture of the author"
                            title="Trang chủ"
                        />
                    </Link>
                </div>

                <div className="border-spacing-1 flex items-center forcus:border-solid border-2 forcus:border-indigo-600 p-1 rounded-lg w-72 h-10">
                    <label htmlFor="search">
                        <FontAwesomeIcon icon={faSearch} width={20} className="text-gray-400" />
                    </label>
                    <input type="text" placeholder="Search" id="search" className="appearance-none border-none outline-none shadow-none bg-transparent focus:ring-0 focus:outline-none" />
                </div>
            </div>
            <ul className="list-none flex">
                <li>


                </li>
                <li><Link href="" scroll={false}>1</Link></li>
                <li><Link href="" scroll={false}>2</Link></li>
                <li><Link href="" scroll={false}>3</Link></li>
                <li><Link href="" scroll={false}> 4</Link></li>

            </ul>
        </nav>

    </header>

}