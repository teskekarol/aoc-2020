import days.Day1
import spock.lang.Specification

class Day1Spec extends Specification {

    def day1 = new Day1()

    def "should solve part one"(){
        when:
        def result = day1.partOne()

        then:
        result == "838624"

    }

    def "should solve part two"(){
        when:
        def result = day1.partTwo()

        then:
        result == "52764180"
    }
}
