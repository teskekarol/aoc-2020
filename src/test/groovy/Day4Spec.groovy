import days.Day4
import spock.lang.Specification

class Day4Spec extends Specification{

    def day4 = new Day4()
    def "should solve part one"(){
        when:
        def result = day4.partOne()

        then:
        result == "216"

    }

    def "should solve part two"(){
        when:
        def result = day4.partTwo()

        then:
        result == "150"
    }
}
